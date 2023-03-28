import React  from 'react';
import { useState, useEffect } from 'react';
//import main from '../assets/images/main.svg';
//import styled from 'styled-components';
//import { Link } from 'react-router-dom';
import jobimage from '../assets/images/jobdashboard.png'
import Logo from '../components/Logo';
import Wrapper  from '../assets/wrappers/LandingPage';
import { Authority } from '@azure/msal-common';
import { Component } from 'react';
import useMsal   from '@azure/msal-react'
import { render } from 'react-dom';
import {PublicClientApplication} from '@azure/msal-browser';
import { config } from '../config';

class LandingTEST extends Component{

  constructor(props){
    super(props);
    this.state ={
      error: null,
      isAuthenticated:false,
      user:{}
  };  
  this.login = this.login.bind(this)
  this.PublicClientApplication = new PublicClientApplication ({
    auth:{
      clientId: config.appId,
      redirectUri: config.redirectUri,
      authority: config.authority
    },
    cache:{
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie : true
    }
  });

  }
  async login(){
    try {
      await this.PublicClientApplication.loginPopup(
        {
          scopes:config.scopes,
          prompt: "select_account"
        });
        this.setState({isAuthenticated:true})
    } catch (err) {
      this.setState({
        isAuthenticated:false,
        user:{},
        error:err
      });
    }
  }

  logout(){
    this.PublicClientApplication.logout();
  }
  
  

render(){
  return (
    <Wrapper>
    <main>
      <nav>
      <Logo />
      </nav>
      <div className='container page'>
        {/* info*/}
        <div className='info'>
          <h1>
          Dashboard <span>ISCAM</span> PBI
          </h1>
          <p>
            Este pagina web esta dedicada a benefeciar al usuario en la visualización
            de sus reportes.
          </p>
          {/* <Link to='/' className='btn btn-hero'>
            Ingresar
          </Link> */}
          {/* <button className='btn btn-hero' onClick={login}> Ingresar </button> */}
          <button className='btn btn-hero' onClick={() => this.login()}>Login</button>
        </div>
        <img src={jobimage} alt="job hunt" className='img main-img'/>
      </div>
    </main>
    </Wrapper>
  );
  }
}

export default LandingTEST;


// export const updateUser = createAsyncThunk(
//   'user/updateUser',
//   async (user, thunkAPI) => {
//     return updateUserThunk('/auth/updateUser', user, thunkAPI);
//   }
// );
// export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);
// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     toggleSidebar: (state) => {
//       state.isSidebarOpen = !state.isSidebarOpen;
//     },
//     logoutUser: (state, { payload }) => {
//       state.user = null;
//       state.isSidebarOpen = false;
//       removeUserFromLocalStorage();
//       if (payload) {
//         toast.success(payload);
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(registerUser.fulfilled, (state, { payload }) => {
//         const { user } = payload;
//         state.isLoading = false;
//         state.user = user;
//         addUserToLocalStorage(user);
//         toast.success(`Hello There ${user.name}`);
//       })
//       .addCase(registerUser.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         toast.error(payload);
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(loginUser.fulfilled, (state, { payload }) => {
//         const { user } = payload;
//         state.isLoading = false;
//         state.user = user;
//         addUserToLocalStorage(user);

//         toast.success(`Welcome Back ${user.name}`);
//       })
//       .addCase(loginUser.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         toast.error(payload);
//       })
//       .addCase(updateUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(updateUser.fulfilled, (state, { payload }) => {
//         const { user } = payload;
//         state.isLoading = false;
//         state.user = user;
//         addUserToLocalStorage(user);

//         toast.success(`User Updated!`);
//       })
//       .addCase(updateUser.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         toast.error(payload);
//       })
//       .addCase(clearStore.rejected, () => {
//         toast.error('There was an error..');
//       });
//   },
// });

