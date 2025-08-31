import React from 'react';
import { View } from 'react-native';

type MoodQuestionProps = {
    value: number;
    onChange: (val:number) => void;
};

export const MoodQuestion: React.FC<MoodQuestionProps> = ({value, onChange}) => {

  return (
    <View>
      {/* Your component code here */}
    </View>
  );
};
