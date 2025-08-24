import { TextInput } from 'react-native';
import { inputStyles } from '../../../constants/styles/inputs';

export type NumberQuestionProps = {
  value: string | number;
  onChange: (val: string) => void;
  placeholder?: string;
};

export const NumberQuestion = ({ value, onChange, placeholder }: NumberQuestionProps) => (
  <TextInput
    style={inputStyles.input}
    value={String(value)}
    onChangeText={onChange}
    placeholder={placeholder}
    keyboardType="numeric"
  />
);
