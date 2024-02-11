import {bikeDataReducer} from './bike-data.reducer';
import {userInfoReducer} from './user-info.reducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  bikeData: bikeDataReducer,
});
