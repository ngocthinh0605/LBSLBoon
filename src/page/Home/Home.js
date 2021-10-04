
import '../../App.css'

import React from 'react'
import Header from './../../components/Header';

// import blockchainifyfull1 from '../../img/'

import blockchainifyfull from '../../img/blockchainifityfull.png'
import blockchainify1 from '../../img/blockchainifity1.png'
import card1 from '../../img/card1.png'
import card2 from '../../img/card2.png'
import card3 from '../../img/card3.png'

import card4 from '../../img/card4.png'

import about1 from '../../img/about1.png'
import vector2 from '../../img/Vector2.png'
import aboutline from '../../img/aboutline.png'
import line2 from '../../img/line2.png'
import aboutbot1 from '../../img/aboutbot1.png'
import maketheo from '../../img/Marrketplaceheo21.png'
import Vectormake2 from '../../img/Vectormake2.png'
import maket2 from '../../img/maket2.png'
import maket3 from '../../img/maket3.png'
import ourItem1 from '../../img/ourItem1.png'
import ourItem2 from '../../img/ourItem2.png'
import ourItem3 from '../../img/ourItem3.png'
import ourItem4 from '../../img/ourItem4.png'
import item31 from '../../img/item3-1.png'
import item32 from '../../img/item3-2.png'
import logopro from '../../img/logoproductlist.png'
import angry from '../../img/angry.jpg'
import angry2 from '../../img/angry2.jpg'
import angrylogo from '../../img/angrylogo.png'
import angrylogo2 from '../../img/angrylogo2.png'
import raya3 from '../../img/raya3.jpg'
import raya3logo from '../../img/raya3logo.png'
import ourpatner1 from '../../img/ourpatner1.png'
import ourpatner2 from '../../img/ourpatner2.png'
import ourpatner3 from '../../img/ourpatner3.png'
import ourpatner4 from '../../img/ourpatner4.png'
import ourpatner5 from '../../img/ourpatner5.png'
import ourpatner6 from '../../img/ourpatner6.png'
import productlist from '../../img/productlist.png'
import productlist1 from '../../img/productlist1.png'
import productlist2 from '../../img/productlist2.png'
import productlist3 from '../../img/productlist3.png'
import productlist4 from '../../img/productlist4.png'
import productlist5 from '../../img/productlist5.png'
import productlist6 from '../../img/productlist6.png'
import productlist7 from '../../img/productlist7.png'
import makeg1 from '../../img/makeGroup1.png'
import makeg2 from '../../img/makeGroup2.png'
import Groudabout1 from '../../img/Groupabout1.png'
import Groudabout2 from '../../img/Groupabout2.png'
import lineabout from '../../img/lineabout.png'
import lineabout1 from '../../img/lineabout1.png'
import dotabout from '../../img/Groupdotabout.png'
import Footer from './../../components/Footer';


const Home = () => {
    return (
        <div>
            <Header></Header>
      <div className="container grid wide">
        <section className="blockchainify ">
          <div className="blockchainify__top">
            <h1>Blockchainify</h1>
            <p>Digiverse - Where games become the places that players can create and</p> 
            <p>own their gamified economies.</p> 
          </div>
          <div className="blockchainify__bottom">
            <img src={blockchainifyfull} alt="" className="blockchainify__bottom-img blockchainify--img" />
            <img src={blockchainify1} alt="" className="blockchainify__bottom-img blockchainify--img1" />
          </div>
        </section>
        <section className="aboutus">
          <img src={Groudabout1} alt="" className="about-img Groupabout1" />
          <img src={about1} alt="" className="about-img about1" />
          <img src={vector2} alt="" className="about-img about1" />
          <img src={aboutline} alt="" className="about-img aboutline" />
          <img src={line2} alt="" className="about-img line2" />
          <img src={aboutbot1} alt="" className="about-img aboutbot1" />
          <img src={lineabout} alt="" className="about-img lineabout" />
          <img src={lineabout1} alt="" className=" lineabout1" />
          <img src={dotabout} alt="" className=" lineabout2" />

          <div className="row">
            <div className="aboutus__left col l-3 c-12">
              <div className="aboutus__left-wrapper">
                <h1>About Us</h1>
                <p>Our desire is to build the</p>
                <p>foundation of the future</p>
                <p>where both the physical</p>
                <p>and virtual worlds are one</p>
              </div>
            </div>
            <div className="aboutus__right l-9">
              <div className="row">
                <div className="aboutus__right-1 col l-6 c-12 ">
                  <div className="aboutus__card aboutus__card-mt col c-12">
                    <img src={card1} alt="" className="aboutus__card-img" />
                    <div className="aboutus__card-infor">
                      <span>Independence</span>
                      <p>Our users will manage their own data and properties</p>
                    </div>
                  </div>
                  <div className="aboutus__card col c-12">
                    <img src={card2} alt="" className="aboutus__card-img" />
                    <div className="aboutus__card-infor">
                      <span>Enthusiasm</span>
                      <p>We’re dedicated to providing the customers with excellent experiences.</p>
                    </div>
                  </div>
                </div>
                <div className="aboutus__right-2 col l-6 c-12">
                  <div className="aboutus__card aboutus__card-mt col c-12">
                    <img src={card3} alt="" className="aboutus__card-img" />
                    <div className="aboutus__card-infor">
                      <span>Security</span>
                      <p>The Laboon team is meant to ease the anxiety of insecurity.</p>
                    </div>
                  </div>
                  <div className="aboutus__card col c-12">
                    <img src={aboutline} alt="" className="about-img aboutline3" />
                    <img src={aboutline} alt="" className="about-img aboutline4" />
                    <img src={card4} alt="" className="aboutus__card-img" />
                    <div className="aboutus__card-infor">
                      <span>Flexibility</span>
                      <p>Our clients can always check their trading history evidently.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={Groudabout2} alt="" className="Groupabout2" />

        </section>
        <section className="ourproducts">
          <div className="ourproducts__title">
            <h1>Our Products</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
          </div>
          <div className="ourproducts__bottom">
            <div className="row">
              <div className="ourproducts__bottom-left l-8 c-12">
                <img src={Vectormake2} alt="" className="ourproducts__bottom-img ourproducts__bottom-img1 " />
                <img src={maket3} alt="" className="ourproducts__bottom-img ourproducts__bottom-img4 " />
                <img src={maketheo} alt="" className="ourproducts__bottom-img ourproducts__bottom-img2" />
                <img src={maket2} alt="" className="ourproducts__bottom-img ourproducts__bottom-img3 " />
                <div className="ourproducts__bottom-wrap col c-12">
                  <span>Marketplace</span>
                  <p>The digital market allows players to sell and buy those items with great qualities</p>
                </div>
              </div>
              <div className="ourproducts__bottom-right l-4 c-12">
                <div className="ourproducts__item-wrap">
                  <div className="ourproducts__item">
                    <div className="ourproducts__item-title">
                      <span>DApps</span>
                    </div>
                    <div className="ourproducts__item-img">
                      <img src={ourItem1} alt="" />
                    </div>
                  </div>
                  <div className="ourproducts__item">
                    <div className="ourproducts__item-title">
                      <span>Games</span>
                    </div>
                    <div className="ourproducts__item-img">
                      <img src={ourItem2} alt="" />
                    </div>
                  </div>

                  <div className="ourproducts__item ourproducts__item--3">
                    <img src={item32} alt="" className="ourproducts__item--3-img" />
                    <img src={item31} alt="" className="ourproducts__item--3-img " />
                    <div className="ourproducts__item-title active">
                      <span>Marketplace</span>
                    </div>
                    <div className="ourproducts__item-img">
                      <img src={ourItem3} alt="" />
                    </div>
                   
                  </div>
                  <div className="ourproducts__item">
                    <div className="ourproducts__item-title">
                      <span>Wallet</span>
                    </div>
                    <div className="ourproducts__item-img">
                      <img src={ourItem4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="productlist grid">
        <img src={productlist} alt="" className="productlist-img productlist-img1" />
        <img src={productlist1} alt="" className="productlist-img productlist1" />
        <img src={productlist2} alt="" className="productlist-img productlist2" />
        <img src={productlist3} alt="" className="productlist-img productlist3" />
        <img src={productlist4} alt="" className="productlist-img productlist4" />
        <img src={productlist5} alt="" className="productlist-img productlist5" />
        <img src={productlist6} alt="" className="productlist-img productlist6" />
        <img src={productlist7} alt="" className="productlist-img productlist7" />
        <div className="grid wide">
          <div className="productlist__title col c-12">
              <h1>Product list</h1>
              <img src={logopro} alt="" />
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            </div>
            <div className="angry">
              <div className="row">
                <div className="angry__left col l-6 c-12">
                  <img src={angry} alt="" />
                </div>
                <div className="angry__right col l-6 c-12">
                  <img src={angrylogo} alt="" />
                  <div className="wrap__angry">
                    <h4>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                    <ul>
                      <li>Beatae vitae dicta sunt explicabo.</li>
                      <li>Nemo enim ipsam voluptatem quia voluptas sit </li>
                      <li>sed quia consequuntur magni dolores eos qui ratione</li>
                    </ul>
                  </div>
                  <button>Play Now</button>
                </div>
              </div>
            </div>
            {/* ---------- */}
            <div className="crash">
              <div className="row">
                <div className="angry__left-2 col l-6 c-12">
                  <img src={angrylogo2} alt="" />
                  <div className="wrap__angry-2">
                    <h4>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                    <ul>
                      <li>Beatae vitae dicta sunt explicabo.</li>
                      <li>Nemo enim ipsam voluptatem quia voluptas sit </li>
                      <li>sed quia consequuntur magni dolores eos qui ratione</li>
                    </ul>
                  </div>
                  <button>Play Now</button>
                </div>
                <div className="angry__right-2 col l-6 c-12">
                  <img src={angry2} alt="" />
                </div>
              </div>
            </div>
            {/* ----------- */}
            <div className="rayman3">
              <div className="row">
                <div className="angry__left col l-6 c-12">
                  <img src={raya3} alt="" />
                </div>
                <div className="angry__right angry__right-none col l-6 c-12">
                  <img src={raya3logo} alt="" />
                  <div className="wrap__angry">
                    <h4>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                    <ul>
                      <li>Beatae vitae dicta sunt explicabo.</li>
                      <li>Nemo enim ipsam voluptatem quia voluptas sit </li>
                      <li>sed quia consequuntur magni dolores eos qui ratione</li>
                    </ul>
                  </div>
                  <button>Play Now</button>
                </div>
              </div>
            </div>
          </div>
        <img src={makeg1} alt="" className="productlist-img makeg1" />
        <img src={makeg2} alt="" className="productlist-img makeg2" />

        </section>
      <section className="ourpatners grid">
        <div className="ourpatners__content grid wide">
          <h1>Our Patners</h1>
          <div className="row ourpatners__items-wrap">
              <img src={ourpatner1} alt="" className="ourpatner__item l-2 c-4"/>
              <img src={ourpatner2} alt="" className="ourpatner__item l-2 c-4"/>
              <img src={ourpatner3}  alt="" className="ourpatner__item l-2 c-4"/>
              <img src={ourpatner4}  alt="" className="ourpatner__item l-2 c-4"/>
              <img src={ourpatner5}  alt="" className="ourpatner__item l-2 c-4"/>
              <img src={ourpatner6}  alt="" className="ourpatner__item l-2 c-4"/>
          </div>
        </div>
      </section>
      <Footer></Footer>
        </div>
    )
}

export default Home
