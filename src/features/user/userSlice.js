import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import { addUserToLocalStorage } from '../../localStorage';
import { getUserFromLocalStorage } from '../../localStorage';
import { removeUserFromLocalStorage } from '../../localStorage';

import {
  // loginUserThunk,
  // registerUserThunk,
  // updateUserThunk,
  clearStoreThunk,
} from './userThunk';

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  isAuthenticated: false,
  token: null,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      //return registerUserThunk('/auth/register', user, thunkAPI);
      const resp = await customFetch.post('/api/register',user)
      return resp.data
      //console.log(resp)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
    // return registerUserThunk('/auth/register', user, thunkAPI);
    // console.log(`Register User:${JSON.stringify(user)}`)
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (state) => {
           localStorage.setItem("user", state.user);
           localStorage.setItem("token", state.token);
          return {
              ...state,
              isLoading : true, 
              isAuthenticated: true,
              user: state.user,
              token: state.token
                 
          };
  }
);

export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    toggleSidebar:(state) =>{
        state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;

        addUserToLocalStorage(user);

        toast.success(`Bienvenido de nuevo ${user}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});


export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;



