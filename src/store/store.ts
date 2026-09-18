import { configureStore } from '@reduxjs/toolkit';
// добавили новое имя для reducer cityOffersSlice.reducer
import cityOffersReducer from '../store/city-offers-slice';

export const store = configureStore({
  reducer: {
    cityOffers: cityOffersReducer,
  },
});

// выводим типы `RootState` and `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
