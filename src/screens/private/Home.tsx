import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const Home = () => {
  const [activeDate, setActiveDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const _onPress = (item: any) => {
    if (!item.match && item != -1) {
      activeDate.setDate(item);
      setActiveDate(new Date(activeDate));
    }
  };

  const changeMonth = (n: any) => {
    const newDate = new Date(
      activeDate.getFullYear(),
      activeDate.getMonth() + n,
      1,
    );
    setActiveDate(newDate);
    const newDate1 = new Date(date.setMonth(date.getMonth() + n));
    setDate(newDate1);
  };

  const generateMatrix = () => {
    const matrix = [];
    // Create header
    matrix[0] = weekDays;

    const year = activeDate.getFullYear();
    const month = activeDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();

    let maxDays = nDays[month];
    if (month === 1) {
      // February
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        maxDays += 1;
      }
    }

    let counter = 1;
    for (let row = 1; row < 7; row++) {
      matrix[row] = [];
      for (let col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row === 1 && col >= firstDay) {
          // Fill in rows only after the first day of the month
          matrix[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          // Fill in rows only if the counter's not greater than
          // the number of days in the month
          matrix[row][col] = counter++;
        }
      }
    }

    return matrix;
  };

  const matrix = generateMatrix();

  const rows = matrix.map((row, rowIndex) => {
    const rowItems = row.map((item: any, colIndex) => (
      <Text
        key={`${rowIndex}_${colIndex}`}
        style={{
          flex: 1,
          height: 18,
          textAlign: 'center',

          // Highlight Sundays
          color: colIndex === 0 ? '#a00' : '#000',
          // Highlight current date
          fontWeight: item === activeDate.getDate() ? 'bold' : '',
        }}
        onPress={() => _onPress(item)}>
        {item !== -1 ? item : ''}
      </Text>
    ));

    return (
      <View
        key={rowIndex}
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 15,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        {rowItems}
      </View>
    );
  });

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          <MaterialIcons name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text>
          {date.toLocaleString('default', {month: 'long', year: 'numeric'})}
        </Text>
        <TouchableOpacity onPress={() => changeMonth(1)}>
          <MaterialIcons name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
        }}
      />
      {rows}
    </View>
  );
};
export default Home;
