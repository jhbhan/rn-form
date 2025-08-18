import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useFormContext } from './FormContext';
import { buttonStyles, useButtonStyle } from '../../constants/styles/buttons';
import { layoutStyles } from '../../constants/styles/layout';

export default function FormNavigationButtons() {
    const { current, goToPrev, goToNext, inAnimation, questions, answers, options } = useFormContext();
    const { showProgress } = options;

    const isQuestionRequired = questions[current]?.required || false;
    const isNextDisabled = inAnimation || (isQuestionRequired && !answers[questions[current].id]);
    const isLastQuestion = current === questions.length - 1;

    const prevButtonStyle = useButtonStyle('secondary', current === 0 || inAnimation);
    const nextButtonStyle = useButtonStyle('primary', isNextDisabled);

    return (
        <View style={layoutStyles.buttonRow}>
            {
                showProgress && (
                    <Text style={styles.progressText}>
                        {current + 1} / {questions.length}
                    </Text>
                )
            }
            <TouchableOpacity
                style={prevButtonStyle}
                onPress={goToPrev}
                disabled={current === 0 || inAnimation}
            >
                <Text style={buttonStyles.secondaryText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={nextButtonStyle}
                onPress={goToNext}
                disabled={isNextDisabled}
            >
                <Text style={buttonStyles.primaryText}>
                {isLastQuestion ? 'Finish' : 'Next'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  progressText: {
    color: '#000',
    fontWeight: '600',
    marginBottom: 8
  }
});
