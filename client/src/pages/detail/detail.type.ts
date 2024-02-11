import {RouteProp} from '@react-navigation/native';
import {RootRoutes, RootStackParamList} from '../../router/router.type';

type StackRouteProp = RouteProp<RootStackParamList, RootRoutes.DETAIL>;

export interface DetailPageProps {
  route: StackRouteProp;
}
