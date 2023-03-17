// Codes By Mahdi Tasha
// Importing Part
import PageProductsItemScoreComponent from "./page-products-item-score";

// Exporting Reviews Component
export default function ReviewsComponent(props){
    // Returning JSX
    return(
        <li className='page--product__product-reviews-item'>
            <div className='page--product__product-review__top'>
                <h6 className='page--product__product-review__name'>{props.author}</h6>
                <div className='page--product__product-review__info'>
                    <h6 className='page--product__product-review__time'><span>{props.time}</span>Month Ago</h6>
                    <PageProductsItemScoreComponent score={props.score}/>
                </div>
            </div>
            <p className='page--product__product-review__txt'>{props.txt}</p>
        </li>
    );
}