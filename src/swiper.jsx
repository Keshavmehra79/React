import React from "react";
import {  Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiperstyle.css';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
const swiper=()=>{
    return(
        <>
         <Swiper navigation={true} modules={[Autoplay]} 
         autoplay={{delay:1000}}
         loop={true}
         className="mySwiper">
        <SwiperSlide><div><h1>Working</h1><br></br> <button>Click me</button></div></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        
        </>
    )
}
export default swiper 