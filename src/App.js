
import React  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {Landing,Error,Register} from ' ~/pages';
//Error, Dashboard,Register
import  Landing from "./pages/Landing";

import  Error from "./pages/Error";
// import  Register from "./pages/Register";
import  ProtectedRoute from "./pages/ProtectedRoute";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddJob from './pages/dashboard/AddJob';
import AllJobs from './pages/dashboard/AllJobs';
import Stats from './pages/dashboard/Stats';
import SharedLayout from './pages/dashboard/SharedLayout';
import Profile from './pages/dashboard/Profile';


function App() {
   return (

      <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
           >
          <Route index element={<Stats/>} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='landing' element={<Landing />} />
        {/* <Route path='register' element={<Register />} /> */}
        <Route path='*' element={<Error />} />      
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>

   );
}
export default App;
