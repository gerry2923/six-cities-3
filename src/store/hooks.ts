/* eslint-disable @typescript-eslint/no-explicit-any */
// добавляем свои хуки, чтобы сразу показать типизацию

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '.';
import { ActionCreator, ActionCreatorsMapObject, AsyncThunk } from '@reduxjs/toolkit';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { selectAuthorizationStatus } from './user/user-slice';
import { AutorizationStatus } from '../components/const';

export const useAppDispatch = () => useDispatch<AppDispatch>();
// typeduseselectorhook - не нужно писать (state: RootState)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// типы для useActionCreators
type BoundActions<Actions extends ActionCreatorsMapObject> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
    ? BoundAsyncThunk<Actions[key]>
    : Actions[key];
};

type BoundAsyncThunk<Action extends ActionCreator<any>> = (
  ...args: Parameters<Action>
) => ReturnType<ReturnType<Action>>;

// хук для создания объекта с синхронными и асинхронными действиями вместе, не по отдельности

export const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions): BoundActions<Actions> => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};

export const useAuth = () => {
  const status = useAppSelector(selectAuthorizationStatus);
  return status === AutorizationStatus.Auth;
};
