import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/home';
import DetailsCompanyScreen from '../screens/detailsCompany';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='homeScreen'>
                <Stack.Screen name="homeScreen" options={{ headerShown: false }} component={HomeScreen} />
                <Stack.Screen name="detailsCompanyScreen" options={{ headerShown: false }} component={DetailsCompanyScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;