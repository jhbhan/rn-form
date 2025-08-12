
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormProvider } from './FormContext';
import FormNavigationButtons from './FormNavigationButtons';
import FormQuestionsContainer from './FormQuestionsContainer';

interface FormProps {
	onSubmit?: () => void;
}

export default function Form() {
  return (
    <FormProvider>
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
