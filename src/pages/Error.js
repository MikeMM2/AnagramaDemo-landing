import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
import React  from 'react';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh! Pagina no encontrada</h3>
        <p>Parece que no podemos encontrar la página que estás buscando.
</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
