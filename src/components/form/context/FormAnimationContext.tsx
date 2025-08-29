import { createContext, ReactNode, useContext, useState } from 'react';
import { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface FormAnimationContextType {
  inAnimation: boolean;
  currentStyle: any;
  nextStyle: any;
  animate: (newIndex: number, dir: number, onFinish?: () => void) => void;
  setInAnimation: (val: boolean) => void;
}

const FormAnimationContext = createContext<FormAnimationContextType | undefined>(undefined);

const transformationDuration = 300;

export const FormAnimationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [inAnimation, setInAnimation] = useState(false);
  const currentOpacity = useSharedValue(1);
  const currentTranslateX = useSharedValue(0);
  const nextOpacity = useSharedValue(0);
  const nextTranslateX = useSharedValue(0);

  const animate = (newIndex: number, dir: number, onFinish?: () => void) => {
    setInAnimation(true);
    nextTranslateX.value = dir * 100;
    nextOpacity.value = 0;
    currentOpacity.value = withTiming(0, { duration: transformationDuration });
    currentTranslateX.value = withTiming(-dir * 40, { duration: transformationDuration });
    nextOpacity.value = withTiming(1, { duration: transformationDuration });
    nextTranslateX.value = withTiming(0, { duration: transformationDuration }, (finished) => {
      if (finished) {
        runOnJS(setInAnimation)(false);
        if (onFinish) runOnJS(onFinish)();
      }
    });
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
    <FormAnimationContext.Provider value={{ inAnimation, currentStyle, nextStyle, animate, setInAnimation }}>
      {children}
    </FormAnimationContext.Provider>
  );
};

export const useFormAnimation = () => {
  const context = useContext(FormAnimationContext);
  if (!context) {
    throw new Error('useFormAnimation must be used within a FormAnimationProvider');
  }
  return context;
};
