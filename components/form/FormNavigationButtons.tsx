import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFormContext } from './FormContext';
import baseStyles from '../../constants/styles';

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
                style={[baseStyles.buttonSecondary, current === 0 && styles.disabledButton]}
                onPress={goToPrev}
                disabled={current === 0 || inAnimation}
            >
                <Text style={baseStyles.buttonSecondaryText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[baseStyles.buttonPrimary]}
                onPress={goToNext}
                disabled={inAnimation}
            >
                <Text style={baseStyles.buttonPrimaryText}>
                {current === questions.length - 1 ? 'Finish' : 'Next'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  buttonRow: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    zIndex: 10,
  },
  button: {
    borderRadius: 8,
    padding: 12,
    width: 96,
    height: 40,
    alignItems: 'center',
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
