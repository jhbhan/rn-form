# rn-form

A flexible and customizable React Native form library for building multi-step forms with various question types, navigation, and context management.

## Features
- Multi-step form navigation
- Context-based state management
- Customizable question types
- Easy integration and styling

## Installation

```bash
npm install rn-form
# or
yarn add rn-form
```

## Usage Example

```tsx
import React from 'react';
import { Form } from 'rn-form';

const questions = [
  { type: 'text', name: 'name', label: 'What is your name?' },
  { type: 'number', name: 'age', label: 'How old are you?' },
  { type: 'multipleChoice', name: 'color', label: 'Favorite color?', options: ['Red', 'Blue', 'Green'] },
  { type: 'rating', name: 'satisfaction', label: 'How satisfied are you?', scale: 5 },
  { type: 'date', name: 'dob', label: 'Date of Birth' },
  { type: 'trueFalse', name: 'subscribe', label: 'Subscribe to newsletter?' },
];

export default function App() {
  return (
    <Form
      questions={questions}
      onSubmit={values => console.log(values)}
    />
  );
}
```

## Question Types

- **TextQuestion**: Free-form text input
- **NumberQuestion**: Numeric input
- **MultipleChoiceQuestion**: Select one from multiple options
- **RatingQuestion**: Star or scale rating
- **DateQuestion**: Date picker
- **TrueFalseQuestion**: Boolean (yes/no, true/false)

## Types

```ts
type Question =
  | TextQuestion
  | NumberQuestion
  | MultipleChoiceQuestion
  | RatingQuestion
  | DateQuestion
  | TrueFalseQuestion;

interface TextQuestion {
  type: 'text';
  name: string;
  label: string;
  placeholder?: string;
}

interface NumberQuestion {
  type: 'number';
  name: string;
  label: string;
  min?: number;
  max?: number;
}

interface MultipleChoiceQuestion {
  type: 'multipleChoice';
  name: string;
  label: string;
  options: string[];
}

interface RatingQuestion {
  type: 'rating';
  name: string;
  label: string;
  scale: number;
}

interface DateQuestion {
  type: 'date';
  name: string;
  label: string;
}

interface TrueFalseQuestion {
  type: 'trueFalse';
  name: string;
  label: string;
}
```

## Components
- `Form`: Main form container
- `FormQuestion`: Renders a single question
- `FormNavigationButtons`: Next/Back/Submit controls
- `FormQuestionsContainer`: Handles question flow

## Styling
Customize styles via the `src/constants/styles/` directory or override with your own styles.

## License
MIT
