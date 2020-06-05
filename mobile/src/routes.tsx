import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home/index';
import Points from './pages/Points/index';
import Details from './pages/Detail/index';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" screenOptions={{ cardStyle:{ backgroundColor:'#f0f0f5' } }}>
                <AppStack.Screen name="Home" component={Home}></AppStack.Screen>
                <AppStack.Screen name="Points" component={Points}></AppStack.Screen>
                <AppStack.Screen name="Details" component={Details}></AppStack.Screen>
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;