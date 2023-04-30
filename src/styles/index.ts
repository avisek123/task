import {extendTheme} from 'native-base';

const COLORS = {
  PRIMARY: '#c84e94',
  SECONDARY: '#0A9BDE',
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
