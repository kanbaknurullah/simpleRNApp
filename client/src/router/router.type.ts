import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Bike} from '../pages/home/home';

export enum RootRoutes {
  SIGN_IN = 'sign-in',
  SIGN_UP = 'sign-up',
  HOME = 'home',
  DETAIL = 'detail',
}

export type RootStackParamList = {
  [RootRoutes.SIGN_UP]: undefined;
  [RootRoutes.SIGN_IN]: undefined;
  [RootRoutes.HOME]: undefined;
  [RootRoutes.DETAIL]: {item?: Bike};
};

export type RootNavigation = NativeStackNavigationProp<RootStackParamList>;
