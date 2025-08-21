import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlowForm } from './components/form/Form';
import { sampleQuestions } from './components/sampleQuestions';
import { useState } from 'react';
import { FormAnswerType } from './constants/types';
import { COLORS } from './constants/styles/colors';
import { buttonStyles, useButtonStyle } from './constants/styles/buttons';
import { SPACING } from './constants/styles/spacing';

export default function FormExample() {
    const questionList = sampleQuestions;
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [answers, setAnswers] = useState<Record<number, FormAnswerType>>({});
    
    const onAnswerChange = (questionId: number, answer: FormAnswerType) => {
        setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    };
    
    const onFormComplete = () => {
        setIsFormComplete(true);
        // Here you can handle the form submission, e.g., send to a server
        // or save to local storage.
    }

    const onFormOpen = () => {
        setIsFormOpen(true);
        setIsFormComplete(false);
    };

    const onFormClose = () => {
        setIsFormOpen(false);
        setIsFormComplete(false);
        setAnswers({});
    }

    const openButtonStyle = useButtonStyle('primary');
    const closeButtonStyle = useButtonStyle('secondary');

    if (!isFormOpen) {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onFormOpen} style={openButtonStyle}>
                    <Text style={buttonStyles.primaryText}>Open Form</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (isFormComplete) {
        return (
            <View style={styles.container}>
                <Text style={buttonStyles.primaryText}>Form Completed!</Text>
                <TouchableOpacity onPress={onFormClose} style={closeButtonStyle}>
                    <Text style={buttonStyles.secondaryText}>Close Form</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlowForm
                questions={questionList}
                answers={answers}
                onAnswerChange={onAnswerChange}
                onFormComplete={onFormComplete}
                closeForm={onFormClose}
            />
        </View>
    );
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    position: 'relative',
    width: width,
    height: height,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.card,
    padding: SPACING.lg,
  },
})
