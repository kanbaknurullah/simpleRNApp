import {BikeDataDispatchTypes} from './dispatch.type';

export interface SetBikeDataAction {
  type: BikeDataDispatchTypes.setBikeData;
  payload: any;
  [key: string]: any;
}

export type AllBikeDataActionTypes = SetBikeDataAction;
