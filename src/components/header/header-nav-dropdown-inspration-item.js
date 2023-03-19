// Codes By Mahdi Tasha
// Exporting header dropdown Inspration Item Component Functional Component As Default
export default function HeaderNavDropdownInsprationItemComponent(props) {
    // Returning JSX
    return(
        <li className='header__nav-dropdown-inspration'>
            <a tabIndex='-1' className='header__nav-dropdown-inspration-link' href={`/product/${props.id}`}>
                <img className='header__nav-dropdown-inspration-img' src={props.img} alt={props.name}/>
                <div className='header__nav-dropdown-inspration-content'>
                    <h6 className='header__nav-dropdown-inspration-title'>{props.name}</h6>
                    <h6 className='header__nav-dropdown-inspration-price'>${props.price.toLocaleString()}</h6>
                </div>
            </a>
        </li>
    );
}
