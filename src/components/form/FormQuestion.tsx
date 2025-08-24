import React from 'react';
import { FormQuestion as FormQuestionType } from '../../constants/types';
import { useFormContext } from './context/FormContext';
import { DateQuestion } from './questions/DateQuestion';
import { MultipleChoiceQuestion } from './questions/MultipleChoiceQuestion';
import { NumberQuestion } from './questions/NumberQuestion';
import { RatingQuestion } from './questions/RatingQuestion';
import { TextQuestion } from './questions/TextQuestion';
import { TrueFalseQuestion } from './questions/TrueFalseQuestion';

type FormQuestionProps = {
  question: FormQuestionType;
  answer: string;
  onChange: (val: string) => void;
};

export const FormQuestion: React.FC<FormQuestionProps> = (props) => {
    const { question } = props;
    const { answers, setAnswer } = useFormContext();
    if (question.format === 'text') {
        return (
            <TextQuestion
                value={answers[question.id]?.toString() || ''}
                onChange={val => setAnswer(question.id, val)}
            />
        )
    } else if (question.format === 'number') {
        return (
            <NumberQuestion
                value={answers[question.id]?.toString() || ''}
                onChange={val => setAnswer(question.id, val)}
            />
        )
    } else if (question.format === 'date') {
        return (
            <DateQuestion
                value={answers[question.id]?.toString() || ''}
                onChange={val => setAnswer(question.id, val)}
                placeholder="YYYY-MM-DD"
            />
        )
    }
    else if (question.format === 'boolean') {
        return (
            <TrueFalseQuestion
                value={answers[question.id] === true}
                onChange={val => setAnswer(question.id, val)}
            />
        );
    }
    else if (question.format === 'multiple-choice' && question.options) {
        return (
            <MultipleChoiceQuestion
                value={answers[question.id]?.toString() || ''}
                options={question.options}
                onChange={val => setAnswer(question.id, val)}
            />
        );
    }
    else if (question.format === 'rating') {
        return (
            <RatingQuestion
                value={Number(answers[question.id])}
                onChange={val => setAnswer(question.id, val)}
                min={question.ratingMin}
                max={question.ratingMax}
            />
        );
    }
};