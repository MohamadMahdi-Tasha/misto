// Codes By Mahdi Tasha
// Importing Part
import { Link } from "react-router-dom";
import PageProductsItemScoreComponent from './page-products-item-score';
import BottomImage1 from '../../assets/img/home-page/second-section/img-1.jpg';
import BottomImage2 from '../../assets/img/home-page/second-section/img-2.jpg';
import BottomImage3 from '../../assets/img/home-page/second-section/img-3.jpg';
import BottomImage4 from '../../assets/img/home-page/second-section/img-4.jpg';

// Exporting Page Products Item Functional Component As Default
export default function PageProductsItemComponent(props) {
    // Returning JSX
    return (
        <li className='page--home__products-item'>
            <Link className='page--home__product-link' to={`/product/${props.id}`}>
                <img className='page--home__product-img' src={props.img} alt={props.name}/>
                <div className='page--home__products-content-holder'>
                    <h6 className='page--home__product-name'>{props.name}</h6>
                    <div className='page--home__product-price-and-score-holder'>
                        <h6 className='page--home__product-price'>${props.price.toLocaleString()}</h6>
                        <PageProductsItemScoreComponent score={props.score} />
                    </div>
                    <ul className='page--home__products-other-images-holder'>
                        <li><img className='page--home__products-other-image' src={BottomImage1} alt="Image Number 1"/></li>
                        <li><img className='page--home__products-other-image' src={BottomImage2} alt="Image Number 2"/></li>
                        <li><img className='page--home__products-other-image' src={BottomImage3} alt="Image Number 3"/></li>
                        <li><img className='page--home__products-other-image' src={BottomImage4} alt="Image Number 4"/></li>
                    </ul>
                    <ul className='page--home__products-sizes-holder'>
                        <li className='page--home__products-size'>XS</li>
                        <li className='page--home__products-size'>S</li>
                        <li className='page--home__products-size'>M</li>
                        <li className='page--home__products-size'>L</li>
                    </ul>
                    <div className='page--home__products-bottom-btns-holder'>
                        <button tabIndex='-1' className='page--home__products-add-to-cart'>ADD TO CART</button>
                        <button tabIndex='-1' className='page--home__products-other-btns'>
                            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.31804 2.31798C1.90017 2.73584 1.5687 3.23192 1.34255 3.77789C1.1164 4.32386 1 4.90903 1 5.49998C1 6.09093 1.1164 6.6761 1.34255 7.22207C1.5687 7.76803 1.90017 8.26411 2.31804 8.68198L10 16.364L17.682 8.68198C18.526 7.83806 19.0001 6.69346 19.0001 5.49998C19.0001 4.3065 18.526 3.1619 17.682 2.31798C16.8381 1.47406 15.6935 0.99995 14.5 0.99995C13.3066 0.99995 12.162 1.47406 11.318 2.31798L10 3.63598L8.68204 2.31798C8.26417 1.90011 7.7681 1.56864 7.22213 1.34249C6.67616 1.11634 6.09099 0.999939 5.50004 0.999939C4.90909 0.999939 4.32392 1.11634 3.77795 1.34249C3.23198 1.56864 2.7359 1.90011 2.31804 2.31798V2.31798Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <button tabIndex='-1' className='page--home__products-other-btns'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 19H13M1 4L4 5L1 4ZM4 5L1 14C1.8657 14.649 2.91852 14.9999 4.0005 14.9999C5.08248 14.9999 6.1353 14.649 7.001 14L4 5ZM4 5L7 14L4 5ZM4 5L10 3L4 5ZM16 5L19 4L16 5ZM16 5L13 14C13.8657 14.649 14.9185 14.9999 16.0005 14.9999C17.0825 14.9999 18.1353 14.649 19.001 14L16 5ZM16 5L19 14L16 5ZM16 5L10 3L16 5ZM10 1V3V1ZM10 19V3V19ZM10 19H7H10Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </Link>
        </li>
    );
}