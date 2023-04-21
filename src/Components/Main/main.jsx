import style from "./main.scss";
import back from "../Assets/background_main3.png";
import arrow from "../Assets/arrow.png";
import ban1 from "../Assets/ban1.png";
import ban2 from "../Assets/ban2.png";
import ban3 from "../Assets/ban3.png";
import ban4 from "../Assets/ban4.png";
import ban5 from "../Assets/ban5.png";
import plan1 from "../Assets/plan1.png";
import plan2 from "../Assets/plan2.png";
import plan3 from "../Assets/plan3.png";
import loc1 from "../Assets/loc1.png";
import loc2 from "../Assets/loc2.png";
import loc3 from "../Assets/loc3.png";
import React, {useState} from "react";
import Modal from "../Modal/Modal";

const Main = () => {
    return (

        <section className="container">
            <section className="main" style={{backgroundImage: `url(${back})`}}>
                <h1 className="main__h1">Discover New Places and Create Unforgettable Memories</h1>
                <div className="main__posts">
                    <div className="main__post">
                        <p className="post__p">Why you should reconsider The Inca Trail, Peru Trip</p>
                        <div className="arrow__div">
                            <img src={arrow} className="arrow" alt=""/>
                        </div>

                    </div>
                    <div className="main__post">
                        <p className="post__p">The Hidden Powers of The Northern Lights, Iceland</p>
                        <div className="arrow__div">
                            <img src={arrow} className="arrow" alt=""/>
                        </div>


                    </div>
                    <div className="main__post">
                        <p className="post__p">10 Facts you didn’t know about The Blue Hole, Belize</p>
                        <div className="arrow__div">
                            <img src={arrow} className="arrow" alt=""/>
                        </div>

                    </div>
                </div>
            </section>

            <section className="mainP2">
                <p className="main__p">ALSO FEATURED IN</p>
                <div className="mainp2__items">
                    <img src={ban1} className="mainp2__img1" alt=""/>
                    <img src={ban2} className="mainp2__img2" alt=""/>
                    <img src={ban3} className="mainp2__img3" alt=""/>
                    <img src={ban4} className="mainp2__img4" alt=""/>
                    <img src={ban5} className="mainp2__img5" alt=""/>
                </div>
                <div className="mainp2__plan">
                    <div className="plan__text">
                        <h3 className="plan__h3">Plan your best trip ever</h3>
                        <p className="plan__p">Making the Most of Your Travel Experience in 2023</p>

                    </div>
                    <div className="plan__btn">
                        <a href="" className="plan__btn__a">View All Destination</a>
                    </div>


                </div>
                <div className="plan__items">
                    <div className="plan__card">
                        <img src={plan1} className="plan__img" alt=""/>
                        <p className="plan__p2">Croatia</p>

                    </div>
                    <div className="plan__card">
                        <img src={plan2} className="plan__img" alt=""/>
                        <p className="plan__p2">Morocco</p>
                    </div>
                    <div className="plan__card">
                        <img src={plan3} className="plan__img" alt=""/>
                        <p className="plan__p2">Mexico</p>
                    </div>
                </div>

                <div className="mainp2__loc">
                    <div className="loc__text">
                        <h3 className="loc__h3">Top Locations to Explore</h3>
                        <p className="loc__p">Here are some of the most visited places in 2023</p>

                    </div>


                </div>
                <div className="loc__items">
                    <div className="loc__card">
                        <img src={loc1} className="loc__img" alt=""/>
                        <p className="loc__p3">Tokyo, Japan</p>
                        <p className="loc__p2">The Shibuya</p>

                    </div>
                    <div className="loc__card">
                        <img src={loc2} className="loc__img" alt=""/>
                        <p className="loc__p3">Rome, Italy</p>
                        <p className="loc__p2">The Colosseum</p>
                    </div>
                    <div className="loc__card">
                        <img src={loc3} className="loc__img" alt=""/>
                        <p className="loc__p3">Capetown, South Africa</p>
                        <p className="loc__p2">The Blyde River Canyon</p>
                    </div>
                </div>
            </section>
        </section>


    )
}

export default Main;