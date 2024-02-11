import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {RootRoutes, RootStackParamList} from './router.type';
import {SignUp} from '../pages/sign-up/sign-up';
import {Login} from '../pages/login/login';
import {Home} from '../pages/home/home';
import {Detail} from '../pages/detail/detail';

const MainNavigator = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: 'white',
  },
  animationTypeForReplace: 'push',
};

export const Router: React.FC = (): JSX.Element => (
  <NavigationContainer>
    <MainNavigator.Navigator
      initialRouteName={RootRoutes.SIGN_IN}
      screenOptions={{headerShown: false}}>
      <MainNavigator.Screen
        options={screenOptions}
        name={RootRoutes.SIGN_UP}
        component={SignUp}
      />
      <MainNavigator.Screen
        options={screenOptions}
        name={RootRoutes.SIGN_IN}
        component={Login}
      />
      <MainNavigator.Screen
        options={screenOptions}
        name={RootRoutes.HOME}
        component={Home}
      />
      <MainNavigator.Screen
        options={screenOptions}
        name={RootRoutes.DETAIL}
        component={Detail}
      />
    </MainNavigator.Navigator>
  </NavigationContainer>
);
