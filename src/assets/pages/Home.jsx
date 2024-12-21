import React from 'react';
import Nav from '../component/Nav';
import Bannar from '../component/Bannar';

const Home = () => {
  return (
    <div className=''>
      <Nav></Nav>
      <Bannar></Bannar>
      <h1 className='text-2xl'>Home pages</h1>
    </div>
  );
};

export default Home;