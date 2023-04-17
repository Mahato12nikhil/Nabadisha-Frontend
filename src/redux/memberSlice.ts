import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import { RootState } from './store';
import { fetchGallery, fetchMembers } from '../services/backend';
import { GetMemberResponse, MemberSchema } from '../definitions/member';

export interface memberState {
    datas: MemberSchema[];
  }
  export const loadMembers = createAsyncThunk<GetMemberResponse, void, {state: RootState}>(
    '/member',
    async (_, thunkApi) => {
      const {
       
      } = thunkApi.getState();
      const {data} = await fetchMembers();
     
      return data;
    },
  );
const initialState: memberState = {
     datas:[]
  };
//Log state=0, not logged In, 1 means logged in
const MemberSlice = createSlice({
    name: 'memberState',
    initialState,

   reducers: {
    clearMembers: state => {
        state.datas = [];
       
      },    
},
extraReducers: builder => {
    builder.addCase(loadMembers.pending, state => {
     
    });
    builder.addCase(loadMembers.fulfilled, (state, action) => {
     // state.loading = false;
      console.log(action)
      if (action.payload.success) {
        
        state.datas =action.payload.data;
         //console.log(action.payload)
      //  state.pageIndex = st    ate.pageIndex + 1;
        //state.extraData = getExtraData();
      }
    });
    builder.addCase(loadMembers.rejected, state => {
    //  state.loading = false;
    });
  },

}
);


export const {clearMembers} = MemberSlice.actions;
export default MemberSlice;