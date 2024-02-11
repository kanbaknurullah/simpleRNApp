import {UserInfoDispatchTypes} from './dispatch.type';

export interface SetUserInfoAction {
  type: UserInfoDispatchTypes.setUserInfo;
  payload: {
    user: any;
    token: string;
  };
  [key: string]: any;
}

export type AllUserInfoActionTypes = SetUserInfoAction;
