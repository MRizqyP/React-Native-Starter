import {
  Dimensions,
  PixelRatio,
  Platform,
  useWindowDimensions,
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

function useDimentionScreen() {
  const {height, width} = useWindowDimensions();
  return {height, width};
}
const fontScale = PixelRatio.getFontScale();
// const guidelineBaseWidth = 375;
const guidelineBaseWidth = 400;

export const scaleSize = ( size : any) => (WINDOW_WIDTH / guidelineBaseWidth) * size;
// export const scaleSize = size => {
//   return (useDimentionScreen().height / guidelineBaseWidth) * size;
// };

export const scaleFont = ( size : any) => {
  // const newSize = size * fontScale;
  const newSize = size / fontScale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
  // return size;
};

// function dimensions(top : any, right = top, bottom = top, left = right, property : String) {
//   let styles = {};
//   styles[`${property}Top`] = top;
//   styles[`${property}Right`] = right;
//   styles[`${property}Bottom`] = bottom;
//   styles[`${property}Left`] = left;
//   return styles;
// }

// export function margin(top : any, right : any, bottom : any, left : any) {
//   return dimensions(top, right, bottom, left, 'margin');
// }

// export function padding(top : any, right : any, bottom: any, left : any) {
//   return dimensions(top, right, bottom, left, 'padding');
// }

export function boxShadow(
  color : any ,
  offset = {height: 2, width: 2},
  radius = 8,
  opacity = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
