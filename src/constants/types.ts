import { ColorStyle } from "./styles";

/**
 * Custom form styles.
 *
 * @interface FormStyles
 * @property {ColorStyle} colors - Color styles for the form.
 */
export interface FormStyles {
  colors: ColorStyle;
}

/**
 * Configuration options for a form.
 *
 * @interface {Object} FormOptions
 * @property {boolean} [showNavigationButtons] - Whether to show navigation buttons.
 * @property {NavigationButtonOptions} [buttonOptions] - Options for navigation buttons.
 * @property {boolean} [showProgress] - Whether to show a progress bar.
 * @property {"numeric" | "percentage" | "progress-bar"} [progressBarType] - Type of progress bar.
 * @property {FormStyles} [styles] - Custom styles for the form.
 */
export interface FormOptions {
  showNavigationButtons?: boolean;
  buttonOptions?: NavigationButtonOptions;
  showProgress?: boolean;
  progressBarType?: "numeric" | "percentage" | "progress-bar";
  styles?: FormStyles;
};

/**
 * Configuration options for navigation buttons.
 *
 * @typedef {Object} NavigationButtonOptions
 * @property {() => void} [onNext] - Callback for next button.
 * @property {() => void} [onPrev] - Callback for previous button.
 * @property {string} [nextButtonText] - Text for next button.
 * @property {string} [prevButtonText] - Text for previous button.
 */
type NavigationButtonOptions = {
  onNext?: () => void;
  onPrev?: () => void;
  nextButtonText?: string;
  prevButtonText?: string;
};

/**
 * Possible answer values for a form question.
 *
 * @typedef {(string | number | boolean)} FormAnswerType
 */
export type FormAnswerType = string | number | boolean;

/**
 * Mapping of question IDs to answers.
 *
 * @typedef {Record<number, FormAnswerType>} FormQuestionAnswers
 */
export type FormQuestionAnswers = Record<number, FormAnswerType>;

/**
 * Single answer value for a question.
 *
 * @typedef {FormAnswerType} FormQuestionAnswerValue
 */
type FormQuestionAnswerValue = FormAnswerType;

/**
 * Dependency definition for conditional logic between questions.
 *
 * @typedef {Object} QuestionDependency
 * @property {number} questionId - The ID of the question this depends on.
 * @property {FormQuestionAnswerValue} value - The value that triggers this question to show.
 */
type QuestionDependency = {
  questionId: number;
  value: FormQuestionAnswerValue;
};

/**
 * Supported formats for form questions.
 *
 * @enum {string}
 */
export enum QuestionFormat {
  /** Text input. */
  Text = "text",

  /** Numeric input. */
  Number = "number",

  /** True/False input. */
  TrueFalse = "boolean",

  /** Multiple choice input. */
  MultipleChoice = "multiple-choice",

  /** Multiple selection input. */
  MultiSelect = "multi-select",

  /** Date input. */
  Date = "date",

  /** Rating input. */
  Rating = "rating",

  /** Dropdown input. */
  Dropdown = "dropdown",
}

/**
 * Represents a question in a form.
 *
 * @interface FormQuestion
 * @property {number} id - Unique question ID.
 * @property {string} text - Question text.
 * @property {QuestionFormat} [format] - Question format/type.
 * @property {QuestionDependency} [dependancy] - Optional dependency for conditional questions.
 * @property {string[]} [options] - Options for multiple choice or dropdown questions.
 * @property {boolean} [required] - Whether this question must be answered.
 * @property {number} [ratingMin] - Minimum rating value, if applicable.
 * @property {number} [ratingMax] - Maximum rating value, if applicable.
 */
export interface FormQuestion {
  id: number;
  text: string;
  format?: QuestionFormat;
  dependancy?: QuestionDependency;
  options?: string[];
  required?: boolean;
  ratingMin?: number;
  ratingMax?: number;
}

export enum MoodOption {
  Happy = 'happy',
  Neutral = 'neutral',
  Sad = 'sad',
}