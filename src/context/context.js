import React, { useState, createContext } from 'react';
import sublinks from '../constants/links';

const GatsbyContext = createContext();

const GatsbyProvider = ({ children }) => {
  return (
    <GatsbyContext.Provider value="hello world">
      {children}
    </GatsbyContext.Provider>
  );
};

export { GatsbyContext, GatsbyProvider };
