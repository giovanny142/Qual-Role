import { Box, NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigator/AppNavigator';
import { Routes } from './src/routes';

export default () =>  {
  return (
    <NativeBaseProvider>
        {/* <AppNavigator /> */}
        <Routes/>
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
