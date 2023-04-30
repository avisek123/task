import {ActivityIndicator, StyleSheet, View} from 'react-native';
import COLORS from 'styles';

const Loader = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color={COLORS.PRIMARY} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
