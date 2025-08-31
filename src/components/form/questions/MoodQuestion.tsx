import React from 'react';
import { View, Image, StyleSheet,  } from 'react-native';
import { MoodOption } from '../../../constants/types';

type MoodQuestionProps = {
    value: MoodOption | null;
    onChange: (val:number) => void;
};

export const MoodQuestion: React.FC<MoodQuestionProps> = ({value, onChange}) => {

  return (
      <View style={styles.container}>
        {
            Object.values(MoodOption).map((mood) => (
                <Image
                    key={mood}
                    source={require(`../../../mood-${mood}.png`)}
                    style={[styles.image, value === mood && styles.selected]}
                />
            ))
        }
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
    selected: {
        borderColor: 'blue',
        borderWidth: 2,
    },
});
