import React, { useState } from 'react';
import Service from './Service';
const Contact = () => {
  const [name, setName] = useState("vamsi");
  const toggleName=()=>{
    setName(name==="vamsi"?"sunny":"vamsi")
  }
  return (
    <div>
      <h1>Name : {name}</h1>
      <button onClick={toggleName}>Toggle</button>
    </div>
  );
};

export default Contact;