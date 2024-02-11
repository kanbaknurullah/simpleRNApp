import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {store} from '../store';

export type IRootState = ReturnType<typeof store.getState>;

export type TypedDispatch = ThunkDispatch<IRootState, any, AnyAction>;
