
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FormQuestionAnswers } from '../types';

// Define the context value type
interface FormContextType {
    answers: FormQuestionAnswers;
    setAnswer: (questionId: number, answer: string | number | boolean) => void;
}

const initialFormContext: FormContextType = {
    answers: {},
    setAnswer: () => {}
};

// Create the context with a default value
const FormContext = createContext<FormContextType | undefined>(initialFormContext);

// Provider component
export const FormProvider = ({ children }: { children: ReactNode }) => {
    const answers: Record<number, string | number | boolean> = {};
    const setAnswer = (questionId: number, answer: string | number | boolean) => {
        answers[questionId] = answer;
    };
    return (
        <FormContext.Provider value={{ answers, setAnswer }}>
            {children}
        </FormContext.Provider>
    );
};

// Custom hook for consuming the context
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
