import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type RatingQuestionProps = {
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
};

export const RatingQuestion = (props: RatingQuestionProps) => {
    const {
        value = 0,
        onChange,
        min = 1,
        max = 5,
    } = props;
    return (
        <View style={styles.row}>
            {Array.from({ length: max - min + 1 }, (_, i) => i + min).map(num => (
            <TouchableOpacity
                key={num}
                style={[styles.star]}
                onPress={() => onChange(num)}
            >
                <Text style={[styles.starText, num <= value && styles.selected]}>{'★'}</Text>
            </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
    },
    star: {
        padding: 8,
        margin: 4,
    },
    starText: {
        fontSize: 24,
        color: '#d1d5db',
    },
    selected: {
        color: '#fbbf24',
    },
});
