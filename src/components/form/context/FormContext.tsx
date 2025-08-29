import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { useFormAnimation } from './FormAnimationContext';
import { FormAnswerType, FormOptions, FormQuestion, FormQuestionAnswers } from '../../../constants/types';

interface FormContextType {
    current: number;
    goToNext: () => void;
    goToPrev: () => void;
    answers: FormQuestionAnswers;
    setAnswer: (questionId: number, answer: string | number | boolean) => void;
    questions: FormQuestion[];
    isLastQuestion: boolean;
    isNextDisabled: boolean;
    isPrevDisabled: boolean;
    options: FormOptions;
}

const FormContext = createContext<FormContextType | undefined>(undefined);


interface FormQuestionAnswersProps {
    questions: FormQuestion[];
    answers: FormQuestionAnswers;
    onAnswerChange: (questionId: number, answer: FormAnswerType) => void;
    onFormComplete: () => void; // Callback when form is completed
}

interface FormProviderProps {
    props: FormQuestionAnswersProps;
    options?: FormOptions;
    children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ options, children, props }: FormProviderProps) => {
    const {
        questions,
        answers,
        onAnswerChange,
        onFormComplete,
    } = props;
    const {
        showNavigationButtons = true,
        buttonOptions = {},
        showProgress = false,
        progressBarType = 'numeric',
    } = options || {};
    const [current, setCurrent] = useState(0);
    const dependancyMetQuestions = useMemo(() => {
        return questions.filter(q => {
            if (!q.dependancy) return true;
            const { questionId, value } = q.dependancy;
            return answers[questionId] === value;
        });
    }, [questions, answers]);

    const { inAnimation, animate, setInAnimation } = useFormAnimation();

    const showCompleteForm = () => {
        onFormComplete();
        setInAnimation(true);
        setTimeout(() => setInAnimation(false), 300);
    }

    const goToNext = () => {
        if (current + 1 >= dependancyMetQuestions.length) {
            showCompleteForm();
            return;
        }
        animate(current + 1, 1, () => setCurrent(current + 1));
    };

    const goToPrev = () => {
        animate(current - 1, -1, () => setCurrent(current - 1));
    };

    const setAnswer = (questionId: number, answer: string | number | boolean) => {
        onAnswerChange(questionId, answer);
    };

    const isQuestionRequired = questions[current]?.required || false;
    const isNextDisabled = inAnimation || (isQuestionRequired && !answers[questions[current].id]);
    const isPrevDisabled = current === 0 || inAnimation;
    const isLastQuestion = current === questions.length - 1;

    return (
        <FormContext.Provider
            value={{
                current,
                goToNext,
                goToPrev,
                answers,
                setAnswer,
                isLastQuestion,
                isNextDisabled,
                isPrevDisabled,
                questions: dependancyMetQuestions,
                options: {
                    showNavigationButtons,
                    buttonOptions,
                    showProgress,
                    progressBarType
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
