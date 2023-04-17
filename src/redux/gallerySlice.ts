import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { GallerySchema, GetGalleryResponse } from '../definitions/gallery';
import { RootState } from './store';
import { fetchGallery } from '../services/backend';

export interface galleryState {
    error?: string;
    loading:boolean,
    loginState: number;
    values: GallerySchema[];
    pageSize:number;
    pageIndex:number;

  }
  export const loadGallery = createAsyncThunk<GetGalleryResponse, void, {state: RootState}>(
    '/gallery',
    async (_, thunkApi) => {
      const {
        gallery: {pageSize, pageIndex},
      } = thunkApi.getState();
      const {data} = await fetchGallery();
     
      return data;
    },
  );
const initialState: galleryState = {
    loginState: 0,
    loading:false,
    values:[],
    error:undefined,
    pageSize:0,
    pageIndex:0
  };
//Log state=0, not logged In, 1 means logged in
const GallerySlice = createSlice({
    name: 'galleryState',
    initialState,

   reducers: {
    clearGallery: state => {
        state.values = [];
        state.pageIndex = 0;
        state.pageSize=0;
      },    
},
extraReducers: builder => {
    builder.addCase(loadGallery.pending, state => {
      state.loading = true;
    });
    builder.addCase(loadGallery.fulfilled, (state, action) => {
      state.loading = false;
     // console.log(action)
      if (action.payload.success) {
        
        state.values =action.payload.data;
       // console.log(action.payload)
        state.pageIndex = state.pageIndex + 1;
        //state.extraData = getExtraData();
      }
    });
    builder.addCase(loadGallery.rejected, state => {
      state.loading = false;
    });
  },

}
);


export const {clearGallery} = GallerySlice.actions;
export default GallerySlice;