import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 
import Container from 'react-bootstrap/Container';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Container style={{
                    minHeight: 'calc(100vh - 120px)',
                    marginTop:"20px"}} >
            {children}
            </Container >
            <Footer />
        </>
    );
};

export default Layout;
