import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { FormAnswerType, FormOptions, FormQuestion, FormQuestionAnswers } from '../types';

interface FormContextType {
  current: number;
  nextIndex: number | null;
  currentStyle: any;
  nextStyle: any;
  goToNext: () => void;
  goToPrev: () => void;
  animate: (newIndex: number, dir: number) => void;
  answers: FormQuestionAnswers;
  setAnswer: (questionId: number, answer: string | number | boolean) => void;
  questions: FormQuestion[];
  inAnimation?: boolean; // Optional prop to indicate if an animation is in progress
  options: FormOptions; // Options for the form
}

const FormContext = createContext<FormContextType | undefined>(undefined);

const transformationDuration = 300;

interface FormQuestionAnswersProps {
    questions: FormQuestion[];
    answers: FormQuestionAnswers;
    onAnswerChange: (questionId: number, answer: FormAnswerType) => void;
}

interface FormProviderProps {
    props: FormQuestionAnswersProps;
    options?: FormOptions;
    children: ReactNode;
}

export const FormProvider = ({ options, children, props }: FormProviderProps) => {
    const {
        questions,
        answers,
        onAnswerChange
    } = props;
    const {
        showNavigationButtons = true,
        buttonOptions = {},
        showProgress = false,
        progressBarType = 'numeric',
        onFormComplete = () => {}, // Default to no-op
    } = options || {};
    const [current, setCurrent] = useState(0);
    const [nextIndex, setNextIndex] = useState<number | null>(null);
    const [inAnimation, setInAnimation] = useState(false);

    const currentOpacity = useSharedValue(1);
    const currentTranslateX = useSharedValue(0);
    const nextOpacity = useSharedValue(0);
    const nextTranslateX = useSharedValue(0);

    const dependancyMetQuestions = useMemo(() => {
        return questions.filter(q => {
            if (!q.dependancy) return true; // No dependency, always met
            const { questionId, value } = q.dependancy;
            return answers[questionId] === value; // Check if the dependency is met
        });
    }, [questions, answers]);

    const animate = (newIndex: number, dir: number) => {
        setInAnimation(true);
        setNextIndex(newIndex);
        nextTranslateX.value = dir * 100;
        nextOpacity.value = 0;
        currentOpacity.value = withTiming(0, { duration: transformationDuration });
        currentTranslateX.value = withTiming(-dir * 40, { duration: transformationDuration });
        nextOpacity.value = withTiming(1, { duration: transformationDuration });
        nextTranslateX.value = withTiming(0, { duration: transformationDuration }, (finished) => {
        if (finished) {
            runOnJS(setCurrent)(newIndex);
            runOnJS(setNextIndex)(null);
            currentOpacity.value = 1;
            currentTranslateX.value = 0;
            runOnJS(setInAnimation)(false);
        }
        });
    };

    const showCompleteForm = () => {
        onFormComplete();
        runOnJS(setInAnimation)(true); // Reset animation state
        currentOpacity.value = withTiming(0, { duration: transformationDuration });
        currentTranslateX.value = withTiming(-40, { duration: transformationDuration });
        runOnJS(setInAnimation)(false); // Reset animation state
    }

    const goToNext = () => {
        if (current + 1 >= dependancyMetQuestions.length) {
            console.log('Form completed');
            showCompleteForm(); // Call the completion callback
            return;
        }
        animate(current + 1, 1);
    };

    const goToPrev = () => {
        animate(current - 1, -1);
    };

    const setAnswer = (questionId: number, answer: string | number | boolean) => {
        onAnswerChange(questionId, answer);
    };

    const currentStyle = useAnimatedStyle(() => ({
        opacity: currentOpacity.value,
        transform: [{ translateX: currentTranslateX.value }],
    }));

    const nextStyle = useAnimatedStyle(() => ({
        opacity: nextOpacity.value,
        transform: [{ translateX: nextTranslateX.value }],
    }));

    return (
        <FormContext.Provider
            value={{
                current,
                nextIndex,
                currentStyle,
                nextStyle,
                goToNext,
                goToPrev,
                animate,
                answers,
                setAnswer,
                questions: dependancyMetQuestions,
                inAnimation,
                options: {
                    showNavigationButtons,
                    buttonOptions,
                    showProgress,
                    progressBarType,
                    onFormComplete, // Pass the callback to the context
                }
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
