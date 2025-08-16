

import React, { createContext, ReactNode, useContext, useState } from 'react';
import { FormQuestion, FormQuestionAnswers } from '../../constants/types';
import { sampleQuestions } from '../sampleQuestions';

interface QuestionsContextType {
  current: number;
  answers: FormQuestionAnswers;
  setAnswer: (questionId: number, answer: string | number | boolean) => void;
  questions: FormQuestion[];
}

const QuestionsContext = createContext<QuestionsContextType | undefined>(undefined);


export const QuestionsProvider = ({ children, current }: { children: ReactNode; current: number;}) => {
  const [answers, setAnswers] = useState<FormQuestionAnswers>({});
  const questions = sampleQuestions;
  const setAnswer = (questionId: number, answer: string | number | boolean) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  return (
    <QuestionsContext.Provider
      value={{
        current,
        answers,
        setAnswer,
        questions,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export const useQuestionsContext = () => {
  const context = useContext(QuestionsContext);
  if (!context) {
    throw new Error('useQuestionsContext must be used within a FormProvider');
  }
  return context;
};
