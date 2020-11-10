import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {NavLink, Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <NavLink to="/"  className='link'>Home</NavLink>
          <NavLink to="/user" className='link'>User</NavLink>
          <NavLink to="/repos" className='link'>Repos</NavLink>
          {/* <Typography variant="h6" color="inherit">
            Home
          </Typography>
          <Typography variant="h6" color="inherit">
            User
          </Typography>
          <Typography variant="h6" color="inherit">
            Repos
          </Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;