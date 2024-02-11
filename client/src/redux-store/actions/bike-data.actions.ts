import {Dispatch} from 'redux';
import {BikeDataDispatchTypes} from '../types/dispatch.type';
import {SetBikeDataAction} from '../types/bike-data.action.type';

export const setBikeData = (status: any) => {
  return (dispatch: Dispatch): void => {
    dispatch<SetBikeDataAction>({
      type: BikeDataDispatchTypes.setBikeData,
      payload: status,
    });
  };
};
