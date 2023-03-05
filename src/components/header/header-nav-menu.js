// Codes By Mahdi Tasha
// Importing Part
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Exporting Header Nav Menu Component Functional Component As Default
export default function HeaderNavMenuComponent() {
    // Returning JSX
    return (
        <div className='header__nav-menu'>
            <div className='header__nav-menu-inner'>
                <ul>
                    <li>TOPS</li>
                    <li><a href="#">Awesome</a></li>
                    <li><a href="#">Beachwear</a></li>
                    <li><a href="#">Beige</a></li>
                    <li><a href="#">Cool New</a></li>
                    <li><a href="#">Dress</a></li>
                    <li><a href="#">Gap</a></li>
                    <li><a href="#">Guess</a></li>
                </ul>
                <ul>
                    <li>BOTTOMS</li>
                    <li><a href="#">Jeans</a></li>
                    <li><a href="#">Lacoste</a></li>
                    <li><a href="#">Levi's</a></li>
                    <li><a href="#">Model</a></li>
                    <li><a href="#">Nice Featured</a></li>
                    <li><a href="#">Polo</a></li>
                    <li><a href="#">Pullover</a></li>
                </ul>
                <ul>
                    <li>ACCESSORIES</li>
                    <li>Scarf Sale 13%</li>
                    <li>Shirt</li>
                    <li>Shoes</li>
                    <li>Shorts</li>
                    <li>Summer</li>
                    <li>Sunglasses</li>
                    <li>Vintage</li>
                </ul>
                <div>
                    <div>
                        <h6>BESTSELLERS</h6>
                        <div>
                            <button><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.6498 8.8499L0.799805 4.9999L4.6498 1.1499" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                            <button><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.34985 1.1499L5.19985 4.9999L1.34985 8.8499" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                        </div>
                    </div>
                    <Swiper className="mySwiper">
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}