import React from 'react';
// import './Header.css'

const styles = {
  minHeight: '60px',
  backgroundColor: '#000',
  color: '#fff',
  textTransform: 'uppercase',
  fontSize: '30px'
}

const title = {
color: 'red'
}


const Header = () => {
  return (
    <header style={styles} >
     <h1 style={title}>Header our Shop</h1>
    </header>
  );
};

export default Header;