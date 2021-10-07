import React from 'react'
import '../css/footer.css'
import '../css/responsive/responsive.css'
import '../grid.css'

import footerlogo from '../img/footerlogo.png';
import logodiscord from '../img/logodiscord.png';
import facebook from '../img/facebook-box-fill.png';
import linked from '../img/linkedin-box-fill.png';
import tw from '../img/twitter-fill.png';


const Footer = () => {
    return (
        <section className="footer grid">
            <div className="grid wide">
                <div className="footer__content">
                    <div className=" footer__content-wrap row">
                        <div className="footer__logo col l-3 c-12">
                            <img src={footerlogo} alt="" />
                            
                        </div>
                        <div className="footer__about col l-3 c-12">
                            <h4>About</h4>
                            <ul >
                                <div className="c-6">
                                    <li>Our team</li>
                                    <li>Blog</li>
                                </div>
                                <div className="c-6">
                                    <li>Contact us</li>
                                    <li>Term of use</li>
                                </div>
                            </ul>
                        </div> 
                        <div className="footer__about col l-3 c-12">
                            <h4>Producs</h4>
                            <ul >
                                <div className="c-6">
                                    <li>Project 1</li>
                                    <li>Project 2</li>
                                </div>
                                <div className="c-6">
                                    <li>Project 3</li>
                                    <li>Project 4</li>
                                </div>
                            </ul>
                        </div>

                        <div className="footer__about footer__connect col l-3 c-12">
                            <h4>Connect</h4>
                            <div className="footer__social">
                                <img className="footer__icon-connect" src={logodiscord} alt="" />
                                <img className="footer__icon-connect" src={facebook} alt="" />
                                <img className="footer__icon-connect" src={linked} alt="" />
                                <img className="footer__icon-connect" src={tw} alt="" />
                                {/* <i class="fab fa-facebook-square footer__icon-connect"></i>
                                <i class="fab fa-linkedin footer__icon-connect"></i>
                                <i class="fab fa-twitter footer__icon-connect"></i> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__infor">
                    <p>© All right reserved 2021. Laboon Website Demo by Laboon Designer</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
