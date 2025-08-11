import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput } from 'react-native';
import Animated from 'react-native-reanimated';
import { useFormContext } from './FormContext';
import { FormQuestion } from './FormQuestion';

const { width, height } = Dimensions.get('window');

export default function FormQuestionsContainer() {
  const { current, nextIndex, currentStyle, nextStyle, answers, setAnswer, questions } = useFormContext();
  return (
    <>
      {/* Current question */}
      <Animated.View style={[styles.fullScreen, currentStyle]}>
        <Text style={styles.question}>{questions[current].text}</Text>
        <FormQuestion
            question={questions[current]}
            answer={answers[questions[current].id]?.toString() || ''}
            onChange={val => setAnswer(questions[current].id, val)}
        />
      </Animated.View>
      {/* Next question (only rendered when animating) */}
      {nextIndex !== null && (
        <Animated.View style={[styles.fullScreen, nextStyle]}>
          <Text style={styles.question}>{questions[nextIndex].text}</Text>
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

const styles = StyleSheet.create({
  fullScreen: {
    position: 'absolute',
    width: width,
    height: height,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
});