import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./Slider.scss";

// import required modules
import {Pagination, Navigation} from "swiper";

import art1 from "../Assets/art1.png";
import art2 from "../Assets/art2.png";
import art3 from "../Assets/art3.png";
import art4 from "../Assets/art4.png";
import art5 from "../Assets/art5.png";
import art6 from "../Assets/art6.png";
import art7 from "../Assets/art7.png";
import art8 from "../Assets/art8.png";
import art9 from "../Assets/art9.png";


export default function App(props) {

    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slider__div">
                        <img src={art1} className="slider__img" alt=""/>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__div">
                        <img src={art2} className="slider__img" alt=""/>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__div">
                        <img src={art3} className="slider__img" alt=""/>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__div">
                        <img src={art4} className="slider__img" alt=""/>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__div">
                        <img src={art5} className="slider__img" alt=""/>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__div">
                        <img src={art6} className="slider__img" alt=""/>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__div">
                        <img src={art7} className="slider__img" alt=""/>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__div">
                        <img src={art8} className="slider__img" alt=""/>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__div">
                        <img src={art9} className="slider__img" alt=""/>
                    </div>

                </SwiperSlide>
            </Swiper>
        </>
    );
}
