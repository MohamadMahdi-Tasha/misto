// Codes By Mahdi Tasha
// Importing Part
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import sliderImage from '../../assets/img/header/img-nav-menu-slider.png';

// Exporting Header Nav Menu Component Functional Component As Default
export default function HeaderNavMenuComponent() {
    // Using Use Swiper Custom Hook To Find Slider In This Component
    const navMenuSlider = useSwiper();

    // Returning JSX
    return (
        <div className='header__nav-menu'>
            <div className='header__nav-menu-inner'>
                <ul className='header__nav-menu-list'>
                    <li className='header__nav-menu-title'>TOPS</li>
                    <li><a className='header__nav-menu-link' href="#">Awesome</a></li>
                    <li><a className='header__nav-menu-link' href="#">Beachwear</a></li>
                    <li><a className='header__nav-menu-link' href="#">Beige</a></li>
                    <li><a className='header__nav-menu-link' href="#">Cool New</a></li>
                    <li><a className='header__nav-menu-link' href="#">Dress</a></li>
                    <li><a className='header__nav-menu-link' href="#">Gap</a></li>
                    <li><a className='header__nav-menu-link' href="#">Guess</a></li>
                </ul>
                <ul className='header__nav-menu-list'>
                    <li className='header__nav-menu-title'>BOTTOMS</li>
                    <li><a className='header__nav-menu-link' href="#">Jeans</a></li>
                    <li><a className='header__nav-menu-link' href="#">Lacoste</a></li>
                    <li><a className='header__nav-menu-link' href="#">Levi's</a></li>
                    <li><a className='header__nav-menu-link' href="#">Model</a></li>
                    <li><a className='header__nav-menu-link' href="#">Nice Featured</a></li>
                    <li><a className='header__nav-menu-link' href="#">Polo</a></li>
                    <li><a className='header__nav-menu-link' href="#">Pullover</a></li>
                </ul>
                <ul className='header__nav-menu-list'>
                    <li className='header__nav-menu-title'>ACCESSORIES</li>
                    <li><a href="#" className='header__nav-menu-link'>Scarf Sale 13%</a></li>
                    <li><a href="#" className='header__nav-menu-link'>Shirt</a></li>
                    <li><a href="#" className='header__nav-menu-link'>Shoes</a></li>
                    <li><a href="#" className='header__nav-menu-link'>Shorts</a></li>
                    <li><a href="#" className='header__nav-menu-link'>Summer</a></li>
                    <li><a href="#" className='header__nav-menu-link'>Sunglasses</a></li>
                    <li><a href="#" className='header__nav-menu-link'>Vintage</a></li>
                </ul>
                <div className='header__nav-menu-slider-holder'>
                    <div className='header__nav-menu-slider-top'>
                        <h6 className='header__nav-menu-title'>BESTSELLERS</h6>
                        <div className='header__nav-menu-slider-top-btns-holder'>
                            <button onClick={() => navMenuSlider.slideNext()} className='header__nav-menu-slider-top-btn'><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.6498 8.8499L0.799805 4.9999L4.6498 1.1499" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                            <button onClick={() => navMenuSlider.slidePrev()} className='header__nav-menu-slider-top-btn'><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.34985 1.1499L5.19985 4.9999L1.34985 8.8499" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                        </div>
                    </div>
                    <Swiper spaceBetween={50} slidesPerView={3} className="header__nav-menu-swiper">
                        <SwiperSlide>
                            <a href="#">
                                <img className='header__nav-menu-slide-img' src={sliderImage} alt="Women's tracksuit Q109"/>
                                <h6 className='header__nav-menu-slide-title'>Women's tracksuit Q109</h6>
                                <h6 className='header__nav-menu-slide-price'>$28.99</h6>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#">
                                <img className='header__nav-menu-slide-img' src={sliderImage} alt="Women's tracksuit Q109"/>
                                <h6 className='header__nav-menu-slide-title'>Women's tracksuit Q109</h6>
                                <h6 className='header__nav-menu-slide-price'>$28.99</h6>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#">
                                <img className='header__nav-menu-slide-img' src={sliderImage} alt="Women's tracksuit Q109"/>
                                <h6 className='header__nav-menu-slide-title'>Women's tracksuit Q109</h6>
                                <h6 className='header__nav-menu-slide-price'>$28.99</h6>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#">
                                <img className='header__nav-menu-slide-img' src={sliderImage} alt="Women's tracksuit Q109"/>
                                <h6 className='header__nav-menu-slide-title'>Women's tracksuit Q109</h6>
                                <h6 className='header__nav-menu-slide-price'>$28.99</h6>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#">
                                <img className='header__nav-menu-slide-img' src={sliderImage} alt="Women's tracksuit Q109"/>
                                <h6 className='header__nav-menu-slide-title'>Women's tracksuit Q109</h6>
                                <h6 className='header__nav-menu-slide-price'>$28.99</h6>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#">
                                <img className='header__nav-menu-slide-img' src={sliderImage} alt="Women's tracksuit Q109"/>
                                <h6 className='header__nav-menu-slide-title'>Women's tracksuit Q109</h6>
                                <h6 className='header__nav-menu-slide-price'>$28.99</h6>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#">
                                <img className='header__nav-menu-slide-img' src={sliderImage} alt="Women's tracksuit Q109"/>
                                <h6 className='header__nav-menu-slide-title'>Women's tracksuit Q109</h6>
                                <h6 className='header__nav-menu-slide-price'>$28.99</h6>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#">
                                <img className='header__nav-menu-slide-img' src={sliderImage} alt="Women's tracksuit Q109"/>
                                <h6 className='header__nav-menu-slide-title'>Women's tracksuit Q109</h6>
                                <h6 className='header__nav-menu-slide-price'>$28.99</h6>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#">
                                <img className='header__nav-menu-slide-img' src={sliderImage} alt="Women's tracksuit Q109"/>
                                <h6 className='header__nav-menu-slide-title'>Women's tracksuit Q109</h6>
                                <h6 className='header__nav-menu-slide-price'>$28.99</h6>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="#">
                                <img className='header__nav-menu-slide-img' src={sliderImage} alt="Women's tracksuit Q109"/>
                                <h6 className='header__nav-menu-slide-title'>Women's tracksuit Q109</h6>
                                <h6 className='header__nav-menu-slide-price'>$28.99</h6>
                            </a>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}