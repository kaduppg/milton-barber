import React from 'react';
import Footer from './Footer';

type Props = {
    children: React.ReactNode;
}
const Layout = ({children}: Props) => {
    return (
        <div>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;