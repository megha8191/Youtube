import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {

  return (
    <div className='sm:flex pt-3'>
      <Sidebar />
      <div className='basis-auto grow'>
      <Outlet/>
      </div>
    </div>
  );
}

export default Body;
