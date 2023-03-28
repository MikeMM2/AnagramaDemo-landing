import { Outlet } from 'react-router-dom';
import BigSidebar from '../../components/BigSidebar';
import Navbar from '../../components/Navbar';
import SmallSidebar from '../../components/SmallSidebar';
import Wrapper from '../../assets/wrappers/SharedLayout';
//import React  from 'react';
//import {PublicClientApplication} from '@azure/msal-browser';

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
 export default SharedLayout;
