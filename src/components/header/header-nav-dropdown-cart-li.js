// Codes By Mahdi Tasha
// Importing Part

// Exporting header dropdown Cart List Item Component Functional Component As Default
export default function HeaderNavDropdownCartLiComponent(props) {
    // Returning JSX
    return (
        <li className='header__nav-dropdown-cart-li'>
            <img className='header__nav-dropdown-cart-li-img' src={props.img} alt={props.name}/>
            <div className='header__nav-dropdown-cart-li-content'>
                <h6 className='header__nav-dropdown-cart-li-title'>{props.name}</h6>
                <h6 className='header__nav-dropdown-cart-li-subtitle'>{props.name}</h6>
                <HeaderNavDropdownCartLiComponent price={37999}/>
            </div>
        </li>
    );
}