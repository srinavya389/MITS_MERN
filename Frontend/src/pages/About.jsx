import React from 'react';
import Contact from './Contact';

const About = ({ name }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <Contact name={name} />
    </div>
  );
};

export default About;