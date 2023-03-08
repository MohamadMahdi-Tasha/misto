// Codes By Mahdi Tasha
// Importing Part
import PageProductsItemScoreComponent from './page-products-item-score';

// Exporting Page Products Item Functional Component As Default
export default function PageProductsItemComponent(props) {
    // Returning JSX
    return (
        <li className='page--home__products-item'>
            <a className='page--home__product-link' href="src/components/pages/page-products-item#">
                <img className='page--home__product-img' src={props.img} alt={props.name}/>
                <h6 className='page--home__product-name'>{props.name}</h6>
                <div className='page--home__product-price-and-score-holder'>
                    <h6 className='page--home__product-price'>${props.price.toLocaleString()}</h6>
                    <PageProductsItemScoreComponent score={4} />
                </div>
            </a>
        </li>
    );
}