import React from 'react';

const SingleFilter = ({value}) => {

  return (
    <div className="available-size">
        <label>
          <input type="checkbox" value={value} />
          <span className="checkmark">
            {value}
          </span></label
        >
      </div>
  );
};

export default SingleFilter;