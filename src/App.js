import React from 'react';
import Navbar from './navbar/Navbar';
import Formfield from './formfield/Formfield';
import Coolbutton from './coolbutton/Coolbutton';

const App = () => {
  return (
    <div>
      <Navbar />
      <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
      <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <Coolbutton isSmall isDanger className="is-rounded my-class">Button 1</Coolbutton>
      <Coolbutton isSmall isSuccess>Button 2</Coolbutton>
    </div>
  );
};

export default App;
