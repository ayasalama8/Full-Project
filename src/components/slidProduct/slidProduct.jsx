import Product from "./Product"
import React from "react"
import "./slidProduct.css"

import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import{Navigation} from "swiper/modules";
import {Autoplay } from 'swiper/modules';
;
export default function SlidProduct({data,title}){
    console.log(data)
    return(
        <div className="slidproduct slid">
           <div className="container">
            <div className="top-slid">
                <h2>{title}</h2>
                <p>Discover Our Products</p>
            </div>
            <Swiper loop={true}
               autoplay={{delay:2500,
                disableOnInteraction: false
              }} 
            slidesPerView={5} 
            navigation={true}
             modules={[Navigation,Autoplay]}
              className="mySwiper">
                
                 {data.map((item)=>{
                    return(
                         <SwiperSlide> <Product item={item}/>  </SwiperSlide>
                         )
                  })}


                
            </Swiper>
         
           </div>
        </div>
    )
}