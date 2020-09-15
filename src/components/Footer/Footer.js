import React from 'react';
import './Footer.css';
import Container from '@material-ui/core/Container';
const Footer = () => {
    return (
        <Container>
            <div className="footerArea">
                <div className="footerLeft">Copyright © All rights reserved.</div>
                <div className="footerRight">Developmed by Zahid-Robin</div>
            </div>
        </Container>
    );
};

export default Footer;