import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FormQuestions from './components/form/Form';
import { sampleQuestions } from './components/sampleQuestions';
import { useState } from 'react';
import { FormAnswerType } from './constants/types';
import baseStyle, { COLORS } from './constants/styles';

export default function App() {
	const questionList = sampleQuestions;
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [isFormComplete, setIsFormComplete] = useState(false);
	const [answers, setAnswers] = useState<Record<number, FormAnswerType>>({});
	const onAnswerChange = (questionId: number, answer: FormAnswerType) => {
		setAnswers((prev) => ({ ...prev, [questionId]: answer }));
	};
	const onFormComplete = () => {
		setIsFormComplete(true);
		setIsFormOpen(false);
		// Here you can handle the form submission, e.g., send to a server
		// or save to local storage.
	}

	const onFormOpen = () => {
		setIsFormOpen(true);
		setIsFormComplete(false);
	};

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
				<Text style={{ fontSize: 24, textAlign: 'center' }}>Thank you for completing the form!</Text>
				<TouchableOpacity onPress={() => setIsFormOpen(false)} style={baseStyle.buttonPrimary}>
					<Text style={{ color: 'white' }}>Close Form</Text>
				</TouchableOpacity>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<FormQuestions
				questions={questionList}
				answers={answers}
				onAnswerChange={onAnswerChange}
				options={{
					onFormComplete: onFormComplete,
				}}
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
	backgroundColor: COLORS.background,
	padding: 24,
  },
});
