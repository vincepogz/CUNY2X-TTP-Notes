import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Opening Day</div>
                <div className="footer_copyright">
                    Yankees Stadium 2022. All rights reservered.
                </div>
            </Fade>
        </footer>
    )
}

export default Footer;