import React from 'react'
import Footer from '../../components/Footer';
import Header from './../../components/Header';
import '../../grid.css';
import './product.scss';
import HeaddingSubPage from '../../components/HeaddingSubPage';

import TitleSubPage from '../../components/TitleSubPage';

import DappsLogo from './imgProduct/DappsLogo.png'
import DappsLogo1 from './imgProduct/DappsLogo1.png'
import DappsLogo2 from './imgProduct/DappsLogo2.png'
import Logogame from './imgProduct/Logogame.png'
import productitem from './imgProduct/productitem.png'


import productitemactive1 from './imgProduct/productitemactive1.png'
import productitemactive2 from './imgProduct/productitemactive2.png'
import arrow from './imgProduct/arrow.png'

import ProductItems from './ProductItems';


const Product = () => {
    return (
        <>
            <Header active = {"product"}></Header>
            <HeaddingSubPage title = {"Products"}></HeaddingSubPage>
            <div className="grid">
                <div className="products__container">
                    <TitleSubPage title={"Laboon Products"} desp ={"Join our digital playground with these products"}></TitleSubPage>

                    <div className="grid wide">
                        <div className="products__content">
                            <div className="products__dapps">
                                <div className="row">
                                    <div className="products__dapps-left col l-8">
                                        <div className="products__dapps-left__wrap">
                                            <h1>DApps</h1>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore</p>
                                        </div>
                                    </div>
                                    <div className="products__dapps-right col l-4">
                                        <img src={DappsLogo2} alt="" className="products__dapps-logo products__dapps2" />
                                        <img src={DappsLogo} alt="" className="products__dapps-logo products__dapps0" />
                                        <img src={DappsLogo1} alt="" className="products__dapps-logo products__dapps1" />
                                    </div>
                                </div>
                            </div>
                            <div className="products__list-items row">
                                <ProductItems title ={"Mall"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems title ={"Stuti"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems title ={"Flo"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems title ={"Tranty"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems active ={"active"} title ={"Tranty"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems title ={"Smalo"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                            </div>
                            <div className="products__dapps products__dapps--snd ">
                                <div className="row">
                                    <div className="products__dapps-left col l-8">
                                        <div className="products__dapps-left__wrap">
                                            <h1>Game</h1>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore</p>
                                        </div>
                                    </div>
                                    <div className="products__dapps-right col l-4">
                                        <img src={DappsLogo2} alt="" className="products__dapps-logo products__dapps2" />
                                        <img src={DappsLogo} alt="" className="products__dapps-logo products__dapps0" />
                                        <img src={Logogame} alt="" className="products__dapps-logo products__dapps1 products__dapps1-game" />
                                    </div>
                                </div>
                            </div>
                            <div className="products__list-items row">
                                <ProductItems title ={"Elu Universe"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems title ={"Pepper Attack"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                                <ProductItems title ={"Hypermon"} descp = {"Lorem Ipsum has been the industry's standard dummy text ever since"}></ProductItems>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
           
            <Footer></Footer>
        </>
    )
}

export default Product
