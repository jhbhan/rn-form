import { StyleSheet, Text, View } from 'react-native';
import FormQuestions from './components/form/Form';
import { sampleQuestions } from './components/sampleQuestions';
import { useState } from 'react';
import { FormAnswerType } from './components/types';

export default function App() {
	const questionList = sampleQuestions;
	const [answers, setAnswers] = useState<Record<number, FormAnswerType>>({});
	const onAnswerChange = (questionId: number, answer: FormAnswerType) => {
		setAnswers((prev) => ({ ...prev, [questionId]: answer }));
	};
	return (
		<View style={styles.container}>
			<FormQuestions
				questions={questionList}
				answers={answers}
				onAnswerChange={onAnswerChange}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
