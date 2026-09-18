// добавляем свои хуки, чтобы сразу показать типизацию

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
// typeduseselectorhook - не нужно писать (state: RootState)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
