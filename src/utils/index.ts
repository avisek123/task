import {Dimensions} from 'react-native';
import {tabBarStyle} from 'styles';
export const DimensionWidth = Dimensions.get('window').width;
export const DimensionHeight = Dimensions.get('window').height;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
var scroll = 0;
export const onScroll = (e: any, navigation: any, notHide?: any) => {
  if (notHide) return;
  let contentOffsetY = e.nativeEvent.contentOffset.y;
  let diff = contentOffsetY - scroll;
  if (diff < 0 || scroll < 0) {
    navigation.setOptions({tabBarStyle: tabBarStyle});
  } else {
    navigation.setOptions({tabBarStyle: {display: 'none'}});
  }
  scroll = contentOffsetY;
};
export const convertBigNumber = (num: any) => {
  if (num) {
    num = num?.toString().replace(/[^0-9.]/g, '');
    if (num < 1000) {
      return num;
    }
    let si = [
      {v: 1e3, s: 'K'},
      {v: 1e6, s: 'M'},
      {v: 1e9, s: 'B'},
      {v: 1e12, s: 'T'},
      {v: 1e15, s: 'P'},
      {v: 1e18, s: 'E'},
    ];
    let index;
    for (index = si.length - 1; index > 0; index--) {
      if (num >= si[index].v) {
        break;
      }
    }
    return (
      (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') +
      si[index].s
    );
  }
  return 0;
};
