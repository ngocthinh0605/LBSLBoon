import React from 'react'
import '../css/header.css'
import '../css/responsive/responsive.css'
import '../grid.css'
import logo21 from '../img/W1.png'
import {Link} from 'react-router-dom'


const navSilde = ()=>{
    const bars = document.querySelector('.header__bars');
    const navbar = document.querySelector('.header__nav')
    bars.addEventListener('click', ()=>{
        navbar.classList.toggle('nav_active');
    })
}

window.addEventListener('load', (event) => {
    navSilde();
  });


const Header = ({active}) => {
    return (
        <> 
        <div className="grid">
            <section className="header">
                <div className="grid wide">
                    <div className="row header__wrapper">
                        <div className="header__logo col l-6 c-11">
                            <img src={logo21} alt="logo" />
                        </div>
                        <div className="header__nav col l-6 ">
                            <ul>
                                <li className={`header__nav-item ${active == 'home' && 'active' } `}><Link to="/">Home</Link></li>
                                <li className={`header__nav-item ${active == 'product' && 'active' } `}><Link to="/product">Product</Link></li>
                                <li className={`header__nav-item ${active == 'team' && 'active' } `}><Link to="/team" >Team</Link></li>
                                <li className={`header__nav-item ${active == 'blog' && 'active' } `}><Link to="/blog" >Blog</Link></li>
                            </ul>
                        </div>
                        <div className="header__bars ">
                            <i className="nav__bar-icon"class="fas fa-bars"></i>
                        </div>
                    </div>
                    
                </div>
            </section>  
        </div>
        </>
    )
}

export default Header
