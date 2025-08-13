
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormProvider } from './FormContext';
import FormNavigationButtons from './FormNavigationButtons';
import FormQuestionsContainer from './FormQuestionsContainer';
import { FormAnswerType, FormOptions, FormQuestion } from '../types';

interface FormProps {
	options?: FormOptions;
	questions: FormQuestion[];
	answers: Record<number, FormAnswerType>;
	onAnswerChange: (questionId: number, answer: FormAnswerType) => void;
}

export default function Form(props: FormProps) {
	return (
		<FormProvider
			props={{
				questions: props.questions,
				answers: props.answers,
				onAnswerChange: props.onAnswerChange,
			}}
			options={props.options}
		>
			<View style={styles.container}>
				<FormQuestionsContainer />
				<FormNavigationButtons />
			</View>
		</FormProvider>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
