import React from "react"
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import {Autoplay, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
export default function HeroSlider(){
    return(
        <div className="hero">
          <div className="container">
        <Swiper loop={true} autoplay={{delay:2500,disableOnInteraction:false,}} pagination={true} modules={[Pagination,Autoplay]} className="mySwiper">
        <SwiperSlide>
            <div className="content">
                <h4>Introduc the new</h4>
                <h3>MictosoftXbox <br/>360Controller</h3>
                <p>Windows Xp/10/7/8 Ps3,Tv Box</p>
                <Link to="/" className="btn">Shop New</Link>
            </div>
            <img src="../src/imgs/banner_Hero1.jpg" alt="sliderHero1" />
        </SwiperSlide>
        <SwiperSlide>
            <div className="content">
                <h4>Introduc the new</h4>
                <h3>MictosoftXbox
                    <br/> 360Controller</h3>
                <p>Windows Xp/10/7/8 Ps3,Tv Box</p>
                <Link to="/" className="btn">Shop New</Link>
            </div>
            <img src="../src/imgs/banner_Hero2.jpg" alt="sliderHero2" />
        </SwiperSlide>
        <SwiperSlide>
            <div className="content">
                <h4>Introduc the new</h4>
                <h3>MictosoftXbox 
                    <br/>360Controller</h3>
                <p>Windows Xp/10/7/8 Ps3,Tv Box</p>
                <Link to="/" className="btn">Shop New</Link>
            </div>
            <img src="../src/imgs/banner_Hero3.jpg" alt="sliderHero3" />
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
    )
}