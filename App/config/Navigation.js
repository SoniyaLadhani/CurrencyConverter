import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-remix-icon';

import Home from '../screens/Home';
import Options from '../screens/Options';
import CurrencyList from '../screens/CurrencyList';
import colors from '../constants/colors';

const MainStack = createNativeStackNavigator();

const MainStackScreen = () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} options={{ headerShown: false, }} />
        <MainStack.Screen name="Options" component={Options} />
    </MainStack.Navigator>
)

const ModalStack = createNativeStackNavigator();

const ModalStackScreen = () => (
    <ModalStack.Navigator screenOptions={{ presentation: 'modal' }}>
        <ModalStack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }} />
        <ModalStack.Screen name="CurrencyList" component={CurrencyList} options={({ navigation, route }) => ({
            title: route.params && route.params.title,
            headerLeft: null,
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.pop()}
                    style={{ paddingHorizontal: 10 }}>
                    <Icon name="close-line" size="24" color={colors.blue}></Icon>
                </TouchableOpacity>
            ),
        })} />
    </ModalStack.Navigator>
)


export default () => (
    <NavigationContainer>
        <ModalStackScreen />
    </NavigationContainer>
)
