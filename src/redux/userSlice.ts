import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { UserSchema } from '../definitions/user';

export interface userState {
    error?: string;
    loginState: number;
    userDetail?: UserSchema;
  }

const initialState: userState = {
    loginState: 0,
    error: undefined,
    userDetail: undefined,
  };
//Log state=0, not logged In, 1 means logged in
const UserSlice = createSlice({
    name: 'userState',
    initialState,
   reducers: {
    userRegLogState: (state, action: PayloadAction<any>) => {
      state.loginState = action.payload.value;
      
    },
    userDetailUpdate: (state, action: PayloadAction<UserSchema>) => {
      state.userDetail = action.payload;
    },
    errorUpdate: (state, action: PayloadAction<string | undefined>) => {
      state.error = action.payload;
    },
    loadingUpdate: (state, action: PayloadAction<boolean>) => {
    
    },
  },
  extraReducers: builder => {
    //builder.addCase(logoutUser.fulfilled, state => {
    //  state.userDetail = undefined;
    //});
  },
});

export const {userRegLogState, userDetailUpdate, loadingUpdate, errorUpdate} = UserSlice.actions;
export default UserSlice;