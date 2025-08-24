export const ANIMATION_CONFIG = {
  transformationDuration: 300,
  slideInDuration: 400,
  slideOutDuration: 300,
  springConfig: {
    damping: 15,
    stiffness: 150,
  },
  timingConfig: {
    duration: 300,
  },
  horizontalSwipe: 50, // Threshold for horizontal swipe to change question
} as const;

export const GESTURE_THRESHOLDS = {
  horizontalSwipe: 50,
  verticalClose: 0.25, // 25% of screen height
} as const;
