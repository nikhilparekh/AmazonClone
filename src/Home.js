import React from 'react'
import "./Home.css"
import Product from './Product'
import Carousel, { consts } from 'react-elastic-carousel';
import cards from './cards';
// import Footer from './Footer';
function Home() {
    return (
     
        <div className="home">
          
            <div className="home__container">
            
              <Carousel className='colo'>
              <img
                className="home__image" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/BTS/Homepage/BTS_HP_Desktop_Phase3_1x-1500x600._CB667984820_.jpg">

                </img>
              <img
                className="home__image" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTI3NjBmZWUt/MTI3NjBmZWUt-YmQ5ZjFhMWEt-w1500._CB665339528_.jpg">

                </img>
  
              <img
                className="home__image" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/TWAR_2021_UPDATED_1500x600_GlowChrisSoloNoGun_TH_Post_1PV_en-US_ARSDE_1Movie._CB664039800_.jpg">

                </img>
                <img
                className="home__image" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/xcm/brand_truths/4_29_Update/C_TBDB_SMB_GW_hero_desktop_3000x1200_1x._CB670680788_.jpg">

                </img>

                
                
              </Carousel>
              
              
            
            <div className="home__row">
          <Product
            id="12321341"
            heading="Hi, Nikhil"
            title="Steve Jobs: The Exclusive Biography Hardcover"
            price={11.96}
            rating={5}
            image="http://www.findaspark.co.uk/wp-content/uploads/2017/07/steve-jobs-the-exclusive-biography-book-cover.jpg"
          />
          <Product
            id="49538094"
            heading="Featured Product"
            title="77.5 L-Shaped Couch, Tool-Free Assembly, Concertible Sectional Sofa with Reversible Chaise, Removable Headrest Pillow for Users of Varying Heights, Cotton (Grey)"
            price={399.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71A%2BvXumbIL._AC_SX466_.jpg"
          />
        </div>

        <div className="home__row">
        <Product
            id="49538094"
            heading="Related to items you've viewed"
            title="New Apple Watch Series 6 (GPS, 44mm) - (Product) RED - Aluminum Case with (Product) RED﻿ - Sport Band"
            price={449.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81LS-PwwQPL._AC_SX522_.jpg"
          />
          <Product
            id="23445930"
            heading="Deal of the Day"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71cWNfXecfL._AC_SL1500_.jpg"
          />
        </div>
        </div>
      </div>
    
  );
}

export default Home;