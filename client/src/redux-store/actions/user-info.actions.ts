import {Dispatch} from 'redux';
import {UserInfoDispatchTypes} from '../types/dispatch.type';
import {SetUserInfoAction} from '../types/user-info.action.type';

export interface UserInfoType {
  user: any;
  token: string;
}

export const setUserInfo = (status: any) => {
  return (dispatch: Dispatch): void => {
    dispatch<SetUserInfoAction>({
      type: UserInfoDispatchTypes.setUserInfo,
      payload: status,
    });
  };
};
