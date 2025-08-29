import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { layoutStyles } from '../../constants/styles';
import { useFormContext } from './context/FormContext';
import { useTheme } from './context/ThemeContext';

export const FormNavigationButtons: React.FC = () => {
    const { current, goToPrev, goToNext, questions, isLastQuestion, isPrevDisabled, isNextDisabled, options } = useFormContext();
    const { showProgress } = options;
    const { themeStyle } = useTheme();

    const prevButtonStyle = [themeStyle.secondaryButton, isPrevDisabled && themeStyle.disabledButton];
    const nextButtonStyle = [themeStyle.primaryButton, isNextDisabled && themeStyle.disabledButton];

    return (
        <View style={layoutStyles.buttonRow}>
            {
                showProgress && (
                    <Text style={[
                        themeStyle.subheading,
                        themeStyle.center
                    ]}>
                        {current + 1} / {questions.length}
                    </Text>
                )
            }
            <TouchableOpacity
                style={prevButtonStyle}
                onPress={goToPrev}
                disabled={isPrevDisabled}
            >
                <Text style={prevButtonStyle}>
                    {options?.buttonOptions?.prevButtonText || 'Back'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={nextButtonStyle}
                onPress={goToNext}
                disabled={isNextDisabled}
            >
                <Text style={nextButtonStyle}>
                    {isLastQuestion ? 'Finish' : (options?.buttonOptions?.nextButtonText || 'Next')}
                </Text>
            </TouchableOpacity>
        </View>
    );
}