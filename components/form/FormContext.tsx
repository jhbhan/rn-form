

import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { FormOptions, FormQuestion, FormQuestionAnswers } from '../types';
import { sampleQuestions } from '../sampleQuestions';

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
}

const FormContext = createContext<FormContextType | undefined>(undefined);

const transformationDuration = 300;

export const FormProvider = ({ options, children }: { options?: FormOptions; children: ReactNode; }) => {
    const {
        showNavigationButtons,
        buttonOptions,
        showProgress,
        progressBarType,
        onFormComplete
    } = options || {};
    const questions = sampleQuestions; // Assuming sampleQuestions is imported from somewhere
    const [current, setCurrent] = useState(0);
    const [nextIndex, setNextIndex] = useState<number | null>(null);
    const [answers, setAnswers] = useState<FormQuestionAnswers>({});
    const [inAnimation, setInAnimation] = useState(false);

    const currentOpacity = useSharedValue(1);
    const currentTranslateX = useSharedValue(0);
    const nextOpacity = useSharedValue(0);
    const nextTranslateX = useSharedValue(0);

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

    const goToNext = () => {
        // You may want to pass questions.length as prop or context
        // For now, just allow increment
        animate(current + 1, 1);
    };

    const goToPrev = () => {
        animate(current - 1, -1);
    };

    const setAnswer = (questionId: number, answer: string | number | boolean) => {
        setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    };

    const currentStyle = useAnimatedStyle(() => ({
        opacity: currentOpacity.value,
        transform: [{ translateX: currentTranslateX.value }],
    }));

    const nextStyle = useAnimatedStyle(() => ({
        opacity: nextOpacity.value,
        transform: [{ translateX: nextTranslateX.value }],
    }));

    const dependancyMetQuestions = useMemo(() => {
        return questions.filter(q => {
            if (!q.dependancy) return true; // No dependency, always met
            const { questionId, value } = q.dependancy;
            return answers[questionId] === value; // Check if the dependency is met
        });
    }, [questions, answers]);

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
                inAnimation
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
