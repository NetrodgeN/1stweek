import React from 'react';
import Search from './Search/Search';
import Cards from './Cards/Cards';

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
