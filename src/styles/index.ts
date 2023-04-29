import {extendTheme} from 'native-base';

const COLORS = {
  PRIMARY: '#E41C36',
  SECONDARY: '#5A5B5A',
};
export default COLORS;

export const CustomTheme = extendTheme({
  colors: COLORS,
});
export const tabBarStyle = {
  height: 60,
  position: 'absolute',
  bottom: 16,
  right: 16,
  left: 16,
  borderRadius: 16,
};
