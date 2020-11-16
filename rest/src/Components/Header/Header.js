import React from 'react';
import './Header.css';
import withAuth from '../../hoc/withAuth';

const Header = ({isAuth}) => {
  console.log(isAuth);
  return (
    <div>
      <header>
        {isAuth ? <h1>Header</h1> : <h1>Chao</h1>} 
        
      </header>
    </div>
  );
};
// export default Header;
export default withAuth(Header);