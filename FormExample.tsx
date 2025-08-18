import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FormView } from './components/form/Form';
import { sampleQuestions } from './components/sampleQuestions';
import { useState } from 'react';
import { FormAnswerType } from './constants/types';
import baseStyle, { COLORS } from './constants/styles';

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
    if (!isFormOpen) {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onFormOpen} style={baseStyle.buttonPrimary}>
                    <Text style={baseStyle.buttonPrimaryText}>Open Form</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (isFormComplete) {
        return (
            <View style={styles.container}>
                <Text style={baseStyle.buttonPrimaryText}>Form Completed!</Text>
                <TouchableOpacity onPress={onFormClose} style={baseStyle.buttonSecondary}>
                    <Text style={baseStyle.buttonSecondaryText}>Close Form</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FormView
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
    padding: 24,
  },
})
