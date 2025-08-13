import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFormContext } from './FormContext';

export default function FormNavigationButtons() {
    const { current, goToPrev, goToNext, inAnimation, questions, options } = useFormContext();
    const { showProgress } = options;

    return (
        <View style={styles.buttonRow}>
            {
                showProgress && (
                    <Text style={styles.progressText}>
                        {current + 1} / {questions.length}
                    </Text>
                )
            }
            <TouchableOpacity
                style={[styles.button, styles.backButton, current === 0 && styles.disabledButton]}
                onPress={goToPrev}
                disabled={current === 0 || inAnimation}
            >
                <Text style={styles.buttonTextDark}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.nextButton]}
                onPress={goToNext}
                disabled={inAnimation}
            >
                <Text style={styles.buttonTextLight}>
                {current === questions.length - 1 ? 'Finish' : 'Next'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  buttonRow: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    borderRadius: 8,
    padding: 12,
    width: 96,
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#d1d5db',
  },
  nextButton: {
    backgroundColor: '#3b82f6',
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonTextLight: {
    color: '#fff',
    fontWeight: '600',
  },
  buttonTextDark: {
    color: '#000',
    fontWeight: '600',
  },
  progressText: {
    color: '#000',
    fontWeight: '600',
    marginBottom: 8
  }
});
