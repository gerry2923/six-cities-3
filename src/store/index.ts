import { configureStore } from '@reduxjs/toolkit';
// добавили новое имя для reducer cityOffersSlice.reducer
import cityOffersReducer from './city-offers-slice';
import offersReducer from './offers-slice';
import { createAPI } from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    cityOffers: cityOffersReducer,
    offers: offersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        // когда будем описывать асинхронные действия, мы всегда сможем получимть доступ к api через extraArgument
        extraArgument: api,
      }
    }),
});

// выводим типы `RootState` and `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
