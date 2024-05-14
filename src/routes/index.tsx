import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import DetailsCompanyScreen from "../screens/detailsCompany";
import { View, Text } from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { ListCompanies } from "../components/listCompany/flatListCompany";

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: 'black', height: 40}}}>
                    <Tab.Screen
                        name="home"
                        component={HomeScreen}
                        options={{
                            tabBarIcon: () => <Icon name="home" size={30} color={'white'} />,
                            tabBarShowLabel: false,
                        }}
                    />
                    <Tab.Screen
                        name="detailsCompany"
                        component={DetailsCompanyScreen}
                        options={{
                            tabBarIcon: () => <Icon name="search" size={30} color={'white'} />,
                            tabBarShowLabel: false
                        }}
                    />
                    {/* <Tab.Screen
                        name="detailsCompany"
                        component={DetailsCompanyScreen}
                        options={{
                            tabBarIcon: () => <Icon name="menu" size={30} color={'white'}/>,
                            tabBarShowLabel: false
                        }}
                    /> */}
                </Tab.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    )
}

