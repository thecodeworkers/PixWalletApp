export const generalShadow = (
  shadowColor: string = '#000',
  width: number = 0,
  height: number = 2,
  shadowOpacity: number = 0.23,
  shadowRadius: number = 2.62,
  elevation: number = 4
) => ({
  shadowColor,
  shadowOffset: {
    width,
    height,
  },
  shadowOpacity,
  shadowRadius,
  elevation,
});
