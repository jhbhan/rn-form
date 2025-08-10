import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { sampleQuestions } from "../sampleQuestions";

const { width, height } = Dimensions.get("window");

const transformationDuration = 300;

export default function FormQuestions() {
  const questions = sampleQuestions;
  const [current, setCurrent] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  const currentOpacity = useSharedValue(1);
  const currentTranslateX = useSharedValue(0);

  const nextOpacity = useSharedValue(0);
  const nextTranslateX = useSharedValue(0);

  const animate = (newIndex: number, dir: number) => {
    // Prepare next question off-screen
    setNextIndex(newIndex);
    nextTranslateX.value = dir * 100;
    nextOpacity.value = 0;

    // Animate current out
    currentOpacity.value = withTiming(0, { duration: transformationDuration });
    currentTranslateX.value = withTiming(-dir * 40, { duration: transformationDuration });

    // Animate next in after a short delay (no blink)
    nextOpacity.value = withTiming(1, { duration: transformationDuration });
    nextTranslateX.value = withTiming(0, { duration: transformationDuration }, (finished) => {
      if (finished) {
        runOnJS(setCurrent)(newIndex);
        runOnJS(setNextIndex)(null);
        currentOpacity.value = 1;
        currentTranslateX.value = 0;
      }
    });
  };

  const goToNext = () => {
    if (current < questions.length - 1) {
      animate(current + 1, 1);
    }
  };

  const goToPrev = () => {
    if (current > 0) {
      animate(current - 1, -1);
    }
  };

  const currentStyle = useAnimatedStyle(() => ({
    opacity: currentOpacity.value,
    transform: [{ translateX: currentTranslateX.value }],
  }));

  const nextStyle = useAnimatedStyle(() => ({
    opacity: nextOpacity.value,
    transform: [{ translateX: nextTranslateX.value }],
  }));

  return (
    <View style={styles.container}>
      {/* Current question */}
      <Animated.View style={[styles.fullScreen, currentStyle]}>
        <Text style={styles.question}>{questions[current].text}</Text>
        <TextInput style={styles.input} placeholder="Type here..." />
      </Animated.View>

      {/* Next question (only rendered when animating) */}
      {nextIndex !== null && (
        <Animated.View style={[styles.fullScreen, nextStyle]}>
          <Text style={styles.question}>{questions[nextIndex].text}</Text>
          <TextInput style={styles.input} placeholder="Type here..." />
        </Animated.View>
      )}
      {/* Navigation buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.backButton, current === 0 && styles.disabledButton]}
          onPress={goToPrev}
          disabled={current === 0}
        >
          <Text style={styles.buttonTextDark}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.nextButton]}
          onPress={goToNext}
        >
          <Text style={styles.buttonTextLight}>
            {current === questions.length - 1 ? "Finish" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  fullScreen: {
    position: "absolute",
    width: width,
    height: height,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  question: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  buttonRow: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    borderRadius: 8,
    padding: 12,
    width: 96,
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "#d1d5db",
  },
  nextButton: {
    backgroundColor: "#3b82f6",
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonTextLight: {
    color: "#fff",
    fontWeight: "600",
  },
  buttonTextDark: {
    color: "#000",
    fontWeight: "600",
  },
});
