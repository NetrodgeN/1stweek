import React from 'react';
import Search from './Search';
import Cards from './Cards';

const HomePage = () => {
  return (
    <div className="wrapper">
      <h1>HomePage</h1>
      <Search />
      <Cards />
    </div>
  );
};

export default HomePage;
