 import NavLinks from './NavLinks';
import Logosmall from './Logosmall';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useSelector } from 'react-redux';
import React  from 'react';

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? 'sidebar-container '
            : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logosmall/>
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
