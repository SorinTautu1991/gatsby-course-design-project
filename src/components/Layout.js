import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { GatsbyContext } from '../context/context';

const Layout = ({ children }) => {
  const data = useContext(GatsbyContext);
  console.log(data);
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
