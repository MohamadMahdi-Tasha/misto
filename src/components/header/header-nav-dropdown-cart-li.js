// Codes By Mahdi Tasha
// Importing Part
import HeaderNavDropdownCartLiBottomComponent from './header-nav-dropdown-cart-li-bottom';

// Exporting header dropdown Cart List Item Component Functional Component As Default
export default function HeaderNavDropdownCartLiComponent(props) {
    // Returning JSX
    return (
        <li className='header__nav-dropdown-cart-li'>
            <img className='header__nav-dropdown-cart-li-img' src={props.img} alt={props.name}/>
            <div className='header__nav-dropdown-cart-li-content'>
                <h6 className='header__nav-dropdown-cart-li-title'>{props.name}</h6>
                <h6 className='header__nav-dropdown-cart-li-subtitle'>{props.subname}</h6>
                <HeaderNavDropdownCartLiBottomComponent price={props.price}/>
            </div>
        </li>
    );
}