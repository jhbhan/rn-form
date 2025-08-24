import React from 'react';
import { Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { layoutStyles, typographyStyles } from '../../constants/styles';
import { useFormContext } from './context/FormContext';
import { FormQuestion } from './FormQuestion';

export const FormQuestionsContainer: React.FC = () => {
  const { current, nextIndex, currentStyle, nextStyle, answers, setAnswer, questions, options } = useFormContext();
  
  // Get custom styles if provided
  const customStyles = options?.styles || {};
  
  // Create custom question text styles
  const questionTextStyle = [
    typographyStyles.heading,
    typographyStyles.center,
    customStyles.questionFontColor ? { color: customStyles.questionFontColor } : undefined,
    customStyles.questionFontSize ? { fontSize: customStyles.questionFontSize } : undefined,
    customStyles.questionFontWeight ? { fontWeight: customStyles.questionFontWeight } : undefined
  ];
  
  if (current === questions.length) {
    return null; // No more questions to display
  }
  else {
    return (
        <>
        {/* Current question */}
        <Animated.View style={[layoutStyles.fullScreen]}>
            <Text style={questionTextStyle}>{questions[current].text}</Text>
            <FormQuestion
                question={questions[current]}
                answer={answers[questions[current].id]?.toString() || ''}
                onChange={val => setAnswer(questions[current].id, val)}
            />
        </Animated.View>
        {/* Next question (only rendered when animating) */}
        {nextIndex !== null && (
            <Animated.View style={[layoutStyles.fullScreen, nextStyle]}>
            <Text style={questionTextStyle}>{questions[nextIndex].text}</Text>
            <FormQuestion
                question={questions[nextIndex]}
                answer={answers[questions[nextIndex].id]?.toString() || ''}
                onChange={val => setAnswer(questions[nextIndex].id, val)}
            />
            </Animated.View>
        )}
        </>
    );
  }
}