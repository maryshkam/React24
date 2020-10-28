import React from 'react';
import PropTypes from 'prop-types';
import styles from './SingleFilter.module.css'

const SingleFilter = ({value}) => {

  return (
    <div className={styles['available-size']}>
        <label className={styles.label}>
          <input className={styles.input} type="checkbox" value={value} />
          <span className={styles.checkmark}>
            {value}
          </span></label
        >
      </div>
  );
};

export default SingleFilter;

SingleFilter.propTypes ={
  value: PropTypes.string
}