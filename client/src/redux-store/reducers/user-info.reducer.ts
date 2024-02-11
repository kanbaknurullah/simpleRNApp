import {UserInfoDispatchTypes} from '../types/dispatch.type';
import {AllUserInfoActionTypes} from '../types/user-info.action.type';
import {UserInfoState} from '../types/state.type';

const INITIAL_STATE: UserInfoState = {
  userInfo: {
    user: null,
    token: '',
  },
};

export const userInfoReducer = (
  state = INITIAL_STATE,
  action: AllUserInfoActionTypes,
) => {
  switch (action.type) {
    case UserInfoDispatchTypes.setUserInfo:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};
