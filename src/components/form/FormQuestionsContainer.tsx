import React from 'react';
import { Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { layoutStyles } from '../../constants/styles';
import { useFormContext } from './context/FormContext';
import { FormQuestion } from './FormQuestion';
import { useTheme } from './context/ThemeContext';

export const FormQuestionsContainer: React.FC = () => {
  const { current, nextIndex, nextStyle, answers, setAnswer, questions } = useFormContext();
  const { themeStyle } = useTheme();
  // Create custom question text styles
  const questionTextStyle = [
    themeStyle.heading,
    themeStyle.center,
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