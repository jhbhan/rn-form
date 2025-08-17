
import { Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { Dimensions, GestureResponderEvent, PanResponder, PanResponderGestureState, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { SlideInDown, SlideOutDown, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { COLORS } from '../../constants/styles';
import { FormAnswerType, FormOptions, FormQuestion } from '../../constants/types';
import { FormProvider, useFormContext } from './FormContext';
import FormNavigationButtons from './FormNavigationButtons';
import FormQuestionsContainer from './FormQuestionsContainer';

interface FormProps {
	options?: FormOptions;
	questions: FormQuestion[];
	answers: Record<number, FormAnswerType>;
	onAnswerChange: (questionId: number, answer: FormAnswerType) => void;
	onFormComplete: () => void; // Callback when form is completed
	closeForm?: () => void; // Optional prop to close the form
}

const FormComponent = (props: FormProps) => {
	const { goToNext, goToPrev, current } = useFormContext();
	const verticalPosition = useSharedValue(0);
	const quarterWayDown = Dimensions.get('window').height * 3 / 4;
	// Animated style
	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateY: verticalPosition.value }],
	}));	
	
	const panResponder = useMemo(() =>
		PanResponder.create({
			onStartShouldSetPanResponder: (evt, gestureState) => {
				const { target } = evt.nativeEvent;
				return target != null; // Only respond to touches on the form container
			},
			onMoveShouldSetPanResponder: (_, gestureState: PanResponderGestureState) => true,
			onPanResponderMove: (_, gestureState: PanResponderGestureState) => {
				verticalPosition.value = gestureState.dy;
			},
			onPanResponderRelease: (evt: GestureResponderEvent, gestureState: PanResponderGestureState) => {
				if (gestureState.dx < -50) {
					goToNext();
				} else if (gestureState.dx > 50 && current > 0) {
					goToPrev();
				}
				console.log(verticalPosition.value);
				// on close on down swipe
				if (verticalPosition.value > quarterWayDown && props.closeForm) {
					props.closeForm();
				} else {
					verticalPosition.value = withTiming(0); // Reset position if not closing
				}
			},
		})
	, [goToNext, goToPrev, current, props.closeForm]);
	return (
		<Animated.View
			{...panResponder.panHandlers}
			entering={SlideInDown.duration(400)}
			exiting={SlideOutDown.duration(300)}
			style={[
				styles.animatedViewContainer,
				animatedStyle
			]}
		>
			<TouchableOpacity
				style={styles.closeButton}
				onPress={props.closeForm}
				hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
			>
				<Ionicons name="close" size={28} color={COLORS.primary} />
			</TouchableOpacity>
			<FormQuestionsContainer />
			<FormNavigationButtons />
		</Animated.View>
	);
};
export function FormView(props: FormProps) {
	return (
		<FormProvider
			props={{
				questions: props.questions,
				answers: props.answers,
				onAnswerChange: props.onAnswerChange,
				onFormComplete: props.onFormComplete,
			}}
			options={props.options}
		>
			<FormComponent {...props} />
		</FormProvider>
	);
}

const styles = StyleSheet.create({
	animatedViewContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	closeButton: {
		position: 'absolute',
		top: 20,
		right: 0,
		zIndex: 10,
		padding: 8,
	}
});
