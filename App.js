import { Box, NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigator/AppNavigator';

export default () =>  {
  return (
    <NativeBaseProvider>
        <AppNavigator />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
