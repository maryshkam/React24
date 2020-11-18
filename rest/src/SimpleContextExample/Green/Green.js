import React, {useContext} from "react";
import SimpleContext from '../../context/SimpleContext'


import "./Green.css";
const Green = () => {
  const context = useContext(SimpleContext);
  console.log(context);
  
  return <div className="green">{context.number}</div>;
};

export default Green;
