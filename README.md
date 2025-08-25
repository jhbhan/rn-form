# rn-form

A flexible and customizable React Native form library for building multi-step forms with various question types, navigation, and context management.

## Features
- Multi-step form navigation
- Customizable question types
- Easy integration
  
## Installation

```bash
npm install @jhbhan/rn-form
# or
yarn add @jhbhan/rn-form
```

## Usage Example

```tsx
import React from 'react';
import { StepForm } from '@jhbhan/rn-form';

export default function FormExample() {
    const questionList = sampleQuestions;
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [answers, setAnswers] = useState<Record<number, FormAnswerType>>({});
    
    const onAnswerChange = (questionId: number, answer: FormAnswerType) => {
        setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    };
    
    const onFormComplete = () => {
        setIsFormComplete(true);
        // Here you can handle the form submission, e.g., send to a server
        // or save to local storage.
    }

    const onFormOpen = () => {
        setIsFormOpen(true);
        setIsFormComplete(false);
    };

    const onFormClose = () => {
        setIsFormOpen(false);
        setIsFormComplete(false);
        setAnswers({});
    }

    if (!isFormOpen) {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onFormOpen}>
                    <Text style={buttonStyles.primaryText}>Open Form</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (isFormComplete) {
        return (
            <View style={styles.container}>
                <Text style={buttonStyles.primaryText}>Form Completed!</Text>
                <TouchableOpacity onPress={onFormClose}>
                    <Text style={buttonStyles.secondaryText}>Close Form</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <StepForm
                questions={questionList}
                answers={answers}
                onAnswerChange={onAnswerChange}
                onFormComplete={onFormComplete}
                closeForm={onFormClose}
            />
        </View>
    );
}
```

## Question Types

- **Text**: Free-form text input
- **Number**: Numeric input
- **TrueFalse**: Boolean (yes/no, true/false)
- **MultipleChoice**: Select one from multiple options
- **Rating**: Star rating
- **MultiSelect**: Select one from multiple options (not implemented yet)
- **Date**: Date picker (not implemented yet)
- **Dropdown**: (not implemented yet)

## Types

```ts
export enum QuestionFormat {
    Text = 'text',
    Number = 'number',
    TrueFalse = 'boolean',
    MultipleChoice = 'multiple-choice',
    Rating = 'rating',
    MultiSelect = 'multi-select', // For future extensibility
    Date = 'date', // For future extensibility  
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

type QuestionDependency = {
    questionId: number; // The ID of the question this depends on
    value: FormQuestionAnswerValue; // The value that triggers this question to show
}

type FormQuestionAnswerValue = FormAnswerType;
```

## Components
- `StepForm`: Main form container

## Styling
Custom style not available as of now

## License
MIT
