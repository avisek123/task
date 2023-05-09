import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const useSevenDayRange = (startDate: any) => {
  const dates = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate?.getTime() + i * 24 * 60 * 60 * 1000); // add i days
    dates.push(date);
  }

  return {dates};
};

export default useSevenDayRange;

const styles = StyleSheet.create({});
