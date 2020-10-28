import React from 'react';
import './Header.css'

const styles = {
  minHeight: '60px',
  backgroundColor: '#000',
  textTransform: 'uppercase',
  fontSize: '30px',
  padding: '20px',
}

const title = {
color: '#fff'
}


const Header = () => {
  return (
    <header style={styles} >
     <h1 style={title}>Header our Shop</h1>
    </header>
  );
};

export default Header;