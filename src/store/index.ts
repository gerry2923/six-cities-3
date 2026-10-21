import { combineReducers, configureStore } from '@reduxjs/toolkit';
// добавили новое имя для reducer cityOffersSlice.reducer
import uiReducer from './ui/ui-slice';
import offersReducer from './offers/offers-slice';
import offerReducer from './offer/offer-slice';
import userReducer from './user/user-slice';
import commentsReducer from './comments/comments-slice';
import favoritesReducer from './favorites/favorites-slice';
import { createAPI } from '../services/api';
// import { AxiosInstance } from 'axios';

export const api = createAPI();

const reducer = combineReducers({
  ui: uiReducer, // UI reducer
  offers: offersReducer,
  user: userReducer,
  offer: offerReducer,
  comments: commentsReducer,
  favorites: favoritesReducer,
});


export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        // когда будем описывать асинхронные действия, мы всегда сможем получимть доступ к api через extraArgument
        // тут надо еще указать тип для ExtraArgument
        extraArgument: api,
      }
    }),
});

// выводим типы `RootState` and `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
