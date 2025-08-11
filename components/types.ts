export type FormQuestionAnswers = Record<number, string | number | boolean>;

type FormQuestionAnswerValue = string | number | boolean;

type QuestionDependency = {
    questionId: number; // The ID of the question this depends on
    value: FormQuestionAnswerValue; // The value that triggers this question to show
}

export enum QuestionFormat {
    Text = 'text',
    Number = 'number',
    TrueFalse = 'boolean', // For future extensibility
    MultipleChoice = 'multiple-choice', // For future extensibility
    MultiSelect = 'multi-select', // For future extensibility
    Date = 'date', // For future extensibility  
    Rating = 'rating', // For future extensibility
    Dropdown = 'dropdown', // For future extensibility
}

export interface FormQuestion {
  id: number;
  text: string;
  format?: QuestionFormat;
  dependancy?: QuestionDependency; // Optional dependency for conditional questions
  options?: string[]; // For multiple choice or dropdown questions
  required?: boolean; // Whether this question must be answered
  ratingMin?: number; // Minimum rating value, if applicable
  ratingMax?: number; // Maximum rating value, if applicable
}

