import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import UserSlice from './userSlice';
import gallerySlice from './gallerySlice';
import MemberSlice from './memberSlice';

export const store = configureStore({
    reducer: {

      user: UserSlice.reducer,
      gallery: gallerySlice.reducer,
      member:MemberSlice.reducer
      
    },
  });
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;