import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {IRootState, TypedDispatch} from './types/store.type';

export const useAppDispatch: () => TypedDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
