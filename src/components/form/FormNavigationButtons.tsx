import { Text, TouchableOpacity, View } from 'react-native';
import { buttonStyles, layoutStyles, typographyStyles, useButtonStyle } from '../../constants/styles';
import { useFormContext } from './context/FormContext';
export default function FormNavigationButtons() {
    const { current, goToPrev, goToNext, inAnimation, questions, answers, options } = useFormContext();
    const { showProgress } = options;

    const isQuestionRequired = questions[current]?.required || false;
    const isNextDisabled = inAnimation || (isQuestionRequired && !answers[questions[current].id]);
    const isLastQuestion = current === questions.length - 1;

    // Apply custom styles if provided
    const customStyles = options?.styles || {};
    
    // Create custom button styles
    const customButtonStyle = {
        backgroundColor: customStyles.buttonBackgroundColor,
        borderRadius: customStyles.buttonBorderRadius,
        padding: customStyles.buttonPadding
    };
    
    // Create custom button text styles
    const customButtonTextStyle = {
        color: customStyles.buttonTextColor,
        fontSize: customStyles.buttonFontSize
    };
    
    const prevButtonStyle = [
        ...useButtonStyle('secondary', current === 0 || inAnimation),
        customStyles.buttonBackgroundColor && customButtonStyle
    ];
    
    const nextButtonStyle = [
        ...useButtonStyle('primary', isNextDisabled),
        customStyles.buttonBackgroundColor && customButtonStyle
    ];

    return (
        <View style={layoutStyles.buttonRow}>
            {
                showProgress && (
                    <Text style={[
                        typographyStyles.subheading,
                        typographyStyles.center,
                        customStyles.fontColor ? { color: customStyles.fontColor } : undefined,
                        customStyles.fontSize ? { fontSize: customStyles.fontSize } : undefined,
                        customStyles.fontWeight ? { fontWeight: customStyles.fontWeight } : undefined
                    ]}>
                        {current + 1} / {questions.length}
                    </Text>
                )
            }
            <TouchableOpacity
                style={prevButtonStyle}
                onPress={goToPrev}
                disabled={current === 0 || inAnimation}
            >
                <Text style={[
                    buttonStyles.secondaryText,
                    customStyles.buttonTextColor ? { color: customStyles.buttonTextColor } : undefined,
                    customStyles.buttonFontSize ? { fontSize: customStyles.buttonFontSize } : undefined
                ]}>
                    {options?.buttonOptions?.prevButtonText || 'Back'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={nextButtonStyle}
                onPress={goToNext}
                disabled={isNextDisabled}
            >
                <Text style={[
                    buttonStyles.primaryText,
                    customStyles.buttonTextColor ? { color: customStyles.buttonTextColor } : undefined,
                    customStyles.buttonFontSize ? { fontSize: customStyles.buttonFontSize } : undefined
                ]}>
                    {isLastQuestion ? 'Finish' : (options?.buttonOptions?.nextButtonText || 'Next')}
                </Text>
            </TouchableOpacity>
        </View>
    );
}