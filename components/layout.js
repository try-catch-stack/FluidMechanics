import React from 'react';
import Header from './header';
import Footer from './footer';
import { useEffect, useState } from 'react';
const Layout = ({ children }) => {
    const [dark, setDark] = useState(false);
    return (
        <>
            <div className="dark:bg-primaryBg dark:text-white">
                <Header dark={dark} setDark={setDark} />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
