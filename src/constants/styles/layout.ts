import { Dimensions, StyleSheet } from 'react-native';
import { SPACING } from './spacing';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const layoutStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.lg,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderRadius: 14,
    padding: SPACING.md,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  fullScreen: {
    position: 'absolute',
    width: width,
    height: height,
    justifyContent: 'center',
    padding: 24,
  },
  buttonRow: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    zIndex: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 0,
    zIndex: 10,
    padding: 8,
  },
  animatedViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
});
