import React from 'react';
import './Header.css';
import withAuth from '../../hoc/withAuth';

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <header>
        {/* {isUserAuth ? <h1>Header</h1> : <h1>Chao</h1>}  */}
        <h1>Header</h1>
        
      </header>
    </div>
  );
};
export default Header;
// export default withAuth(Header);