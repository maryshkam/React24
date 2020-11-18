import React from "react";
import SimpleContext from '../../context/SimpleContext'
import Blue from "../Blue/Blue";
import "./Red.css";
const Red = () => {
  return (
    <SimpleContext.Consumer>
      {(context)=>(<div className="red">
          <p>{context.number}</p>
          <Blue />
        </div>)}
    </SimpleContext.Consumer>
        
  );
};

export default Red;