import React from 'react';
// import './Filter.css';
import sizes from '../../db/sizes.json';
import SingleFilter from '../SingleFilter/SingleFilter';
import styles from './Filter.module.css'

const Filter = () => {
  return (
    <div className={styles.filters}>
      <h4 className={styles.title}>Sizes:</h4>
      {sizes.map((size)=><SingleFilter key={size} value={size}/>)}
      {/* <!-- Size start --> */}
      
      
      {/* <!-- size end --> */}
    </div>
  );
};

export default Filter;