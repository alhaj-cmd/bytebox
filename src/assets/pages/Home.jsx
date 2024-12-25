import React from 'react';
import Nav from '../component/Nav';
import { Outlet } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <div className='h-16'>
      <Nav></Nav> 
      </div>
      <h1 className='text-2xl'>Home pages</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;