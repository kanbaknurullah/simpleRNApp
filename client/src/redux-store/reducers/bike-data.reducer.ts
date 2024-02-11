import {BikeDataDispatchTypes} from '../types/dispatch.type';
import {AllBikeDataActionTypes} from '../types/bike-data.action.type';
import {BikeDataState} from '../types/state.type';

const INITIAL_STATE: BikeDataState = {
  bikeData: null,
};

export const bikeDataReducer = (
  state = INITIAL_STATE,
  action: AllBikeDataActionTypes,
) => {
  switch (action.type) {
    case BikeDataDispatchTypes.setBikeData:
      return {
        ...state,
        bikeData: action.payload,
      };
    default:
      return state;
  }
};
