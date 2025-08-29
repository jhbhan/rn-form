import React from 'react';
import { Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { layoutStyles } from '../../constants/styles';
import { useFormContext } from './context/FormContext';
import { useFormAnimation } from './context/FormAnimationContext';
import { FormQuestion } from './FormQuestion';
import { useTheme } from './context/ThemeContext';

export const FormQuestionsContainer: React.FC = () => {
  const { current, answers, setAnswer, questions } = useFormContext();
  const { nextStyle, inAnimation } = useFormAnimation();
  const [nextIndex, setNextIndex] = React.useState<number | null>(null);
  React.useEffect(() => {
    if (inAnimation) {
      if (current < questions.length - 1) setNextIndex(current + 1);
      else setNextIndex(null);
    } else {
      setNextIndex(null);
    }
  }, [inAnimation, current, questions.length]);
  const { themeStyle } = useTheme();
  const questionTextStyle = [
    themeStyle.heading,
    themeStyle.center,
  ];
  if (current === questions.length) {
    return null;
  } else {
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