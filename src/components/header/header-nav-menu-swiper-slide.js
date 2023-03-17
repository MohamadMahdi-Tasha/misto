// Codes By Mahdi Tasha
// Exporting Header Nav Menu Swiper Slide Component Functional Component As Default
export default function HeaderNavMenuSwiperSlideComponent(props) {
    return (
        <a className='header__nav-menu-slide-link' tabIndex='-1' href={`/product/${props.id}`}>
            <img className='header__nav-menu-slide-img' src={props.img} alt="Women's tracksuit Q109"/>
            <h6 className='header__nav-menu-slide-title'>{props.name}</h6>
            <h6 className='header__nav-menu-slide-price'>${props.price.toLocaleString()}</h6>
        </a>
    );
}