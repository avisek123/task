import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import COLORS from 'styles';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Private} from 'screens';

const Tab = createBottomTabNavigator();

const TabButton = (props: any) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);
  const textViewRef = useRef<any>(null);

  useEffect(() => {
    if (focused) {
      // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
      viewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
      textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
    } else {
      viewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
      textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, {flex: focused ? 1 : 0.65}]}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            {backgroundColor: item.color, borderRadius: 16},
          ]}
        />
        <View
          style={[
            styles.btn,
            {backgroundColor: focused ? null : item.alphaClr},
          ]}>
          <Icon
            as={item.type}
            name={item.icon}
            color={focused ? '#fff' : COLORS.PRIMARY}
          />
          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text
                style={{
                  color: '#fff',
                  paddingHorizontal: 8,
                }}>
                {item.label}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function AnimTab3() {
  const TabArr1 = [
    {
      route: 'Home',
      label: 'Home',
      type: Ionicons,
      icon: 'home-outline',
      component: Private.Home,
      color: COLORS.PRIMARY,
      alphaClr: '#637aff00',
    },
    {
      route: 'Orders',
      label: 'Products',
      type: MIcon,
      icon: 'view-dashboard-outline',
      component: Private.Home,
      color: COLORS.PRIMARY,
      alphaClr: '#637aff00',
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      }}>
      {TabArr1.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => {
                return <>{<TabButton {...props} item={item} />}</>;
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  },
});
