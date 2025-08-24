import React from 'react';
import { TextInput } from 'react-native';
import { inputStyles } from '../../../constants/styles/inputs';
import { useFormContext } from '../context/FormContext';

export type TextQuestionProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

export const TextQuestion: React.FC<TextQuestionProps> = ({ value, onChange, placeholder }: TextQuestionProps) => {
  const { options } = useFormContext();
  const customStyles = options?.styles || {};
  
  // Create custom input styles
  const inputStyle = [
    inputStyles.input,
    customStyles.inputBackgroundColor ? { backgroundColor: customStyles.inputBackgroundColor } : undefined,
    customStyles.inputTextColor ? { color: customStyles.inputTextColor } : undefined,
    customStyles.inputBorderColor ? { borderColor: customStyles.inputBorderColor } : undefined,
    customStyles.inputBorderWidth ? { borderWidth: customStyles.inputBorderWidth } : undefined,
    customStyles.inputBorderRadius ? { borderRadius: customStyles.inputBorderRadius } : undefined
  ];
  
  return (
    <TextInput
      style={inputStyle}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
    />
  );
};
