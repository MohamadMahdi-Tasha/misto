// Codes By Mahdi Tasha
// Importing Part
import React from 'react';
import logoTypo from '../../assets/img/header/img-logo-typo.svg';
import HeaderNavMenuComponent from "./header-nav-menu";
import HeaderNavDropdownLiComponent from "./header-nav-dropdown-li";

// Exporting Header Nav Component Functional Component As Default
export default function HeaderNavComponent (props) {
    // Creating A Refrence To Mobile Nav Toggler
    const refrenceOfMobileNavToggler = React.createRef();

    // A Function To Handle Click Of Mobile Nav Toggler
    function handleClickOfMobileNavToggler() {
        const clickedElement = refrenceOfMobileNavToggler.current;

        clickedElement.classList.toggle('header__mobile-nav-toggler--focused');
        (clickedElement.classList.contains('header__mobile-nav-toggler--focused'))
            ? document.body.style.overflow = 'hidden'
            : document.body.removeAttribute('style')
    }

    // Returning JSX
    return (
        <nav className='header__nav'>
            <div className="header__nav-inner">
                <img className='header__nav-img' src={logoTypo} alt="Misto Logo"/>
                <ul className='header__nav-list'>
                    <li className='header__nav-list-item'><a className='header__nav-list-item-link' href="#">About Us</a></li>
                    <li className='header__nav-list-item'><a className='header__nav-list-item-link header__nav-list-item-link--menu' href="#">Women</a><HeaderNavMenuComponent /></li>
                    <li className='header__nav-list-item'><a className='header__nav-list-item-link header__nav-list-item-link--menu' href="#">Men</a><HeaderNavMenuComponent /></li>
                    <li className='header__nav-list-item'><a className='header__nav-list-item-link header__nav-list-item-link--menu' href="#">Beauty</a><HeaderNavMenuComponent /></li>
                    <li className='header__nav-list-item'><a className='header__nav-list-item-link header__nav-list-item-link--menu' href="#">Accessories</a><HeaderNavMenuComponent /></li>
                    <li className='header__nav-list-item'><a className='header__nav-list-item-link' href="#">Blog</a></li>
                    <li className='header__nav-list-item'><a className='header__nav-list-item-link' href="#">Contact</a></li>
                </ul>
                <ul className='header__nav-list'>
                    <HeaderNavDropdownLiComponent type='search'></HeaderNavDropdownLiComponent>
                    <HeaderNavDropdownLiComponent type='localization'></HeaderNavDropdownLiComponent>
                    <HeaderNavDropdownLiComponent type='login'></HeaderNavDropdownLiComponent>
                    <HeaderNavDropdownLiComponent checkoutCount={props.checkoutCount} type='cart'></HeaderNavDropdownLiComponent>
                </ul>
                <button className='header__mobile-nav-toggler' ref={refrenceOfMobileNavToggler} onClick={handleClickOfMobileNavToggler}>
                    <span className='header__mobile-nav-toggler-icon-rect header__mobile-nav-toggler-icon-rect--left'></span>
                    <span className='header__mobile-nav-toggler-icon-rect header__mobile-nav-toggler-icon-rect--mid'></span>
                    <span className='header__mobile-nav-toggler-icon-rect header__mobile-nav-toggler-icon-rect--right'></span>
                </button>
            </div>
        </nav>
    );
}