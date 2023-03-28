import React  from 'react';
import { useState, useEffect } from 'react';
import jobimage from '../assets/images/jobdashboard.png'
import Logo from '../components/Logo';
import Wrapper  from '../assets/wrappers/LandingPage';
import { useDispatch, useSelector } from 'react-redux';
import {PublicClientApplication} from '@azure/msal-browser';
import { config } from '../config';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../features/user/userSlice';


const initialState = {
    error: null,
    isAuthenticated:false,
    token: null,
    isMember: true,
    user:{}
};

function Landing(){

  const [values,setValues] = useState(initialState);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
    const msalInstance  = new PublicClientApplication({
 
      auth: {
        clientId: config.appId,
        redirectUri: config.redirectUri,
        authority: config.authority
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
             }
    });
   
    const startLogin = async (e) => {
      e.preventDefault();
      
      var loginRequest = {
        scopes: ["user.read"] // optional Array<string>
      };
      
      try {
         
        const loginResponse = msalInstance .loginPopup(loginRequest);     
        const user = (await loginResponse).account.username;
        const token = (await loginResponse).accessToken;

        const resJson = {
          token: token,
          user: user
        };
   
        dispatch({ type: "LOGIN",payload: resJson})

        setValues({  error : null, isAuthenticated : true,token: token, isMember: true, user: user });
           
        // if (values.isMember) {
        //   dispatch(loginUser({
        //     type: 'LOGIN', payload: {user,token}
        // }));
        //   return;
        // }
        if (values.isMember) {
          dispatch(loginUser({ user: user, token: token }));
          return;
        }

        console.log("Login successfully");

      } catch (err) {
   
        console.log("Authentication Failed.....");
        console.log(err);
      }
    }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [user]);

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
          <button className="btn btn-hero" data-toggle="button" onClick={(e) => { startLogin(e) }}>Login</button>

        </div>
        <img src={jobimage} alt="job hunt" className='img main-img'/>
      </div>
    </main>
    </Wrapper>
  );
}


export default Landing;