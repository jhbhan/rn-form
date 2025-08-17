import { Dimensions, StyleSheet, Text } from 'react-native';
import { COLORS } from './constants/styles';
import FormExample from './FormExample';

export default function App() {
	return (
      <FormExample />
	)
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
  },
});
