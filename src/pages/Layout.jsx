import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Contact from './Contact';
import Blog from './Blog';

const Layout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Contact />
            <Blog />
        </>
    );
};

export default Layout;