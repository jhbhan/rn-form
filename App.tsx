import { StyleSheet, Text, View } from 'react-native';
import FormQuestions from './components/form/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <FormQuestions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
