import React from 'react'

import Dashboard from './doshboard';
import Products from '../products';

const Main = () => {
  return (
    <div className="flex">
      <Dashboard/>
      <div className=" w-[80%]">
        <Products/>
      </div>
    </div>
  );
}

export default Main