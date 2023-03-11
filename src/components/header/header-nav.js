// Codes By Mahdi Tasha
// Importing Part
import React from 'react';
import logoTypo from '../../assets/img/header/img-logo-typo.svg';
import HeaderNavMenuComponent from "./header-nav-menu";
import HeaderNavDropdownLiComponent from "./header-nav-dropdown-li";
import HeaderNavMobileTogglerComponent from './header-nav-mobile-toggler';

// Exporting Header Nav Component Functional Component As Default
export default function HeaderNavComponent (props) {
    // Returning JSX
    return (
        <nav className='header__nav'>
            <div className="header__nav-inner">
                <img className='header__nav-img' src={logoTypo} alt="Misto Logo"/>
                <ul className='header__nav-list'>
                    <li className='header__nav-list-item'><a className='header__nav-list-item-link' href="#">About Us</a></li>
                    <li className='header__nav-list-item header__nav-list-item--menu-toggler'><a className='header__nav-list-item-link' href="#">Women</a><HeaderNavMenuComponent /></li>
                    <li className='header__nav-list-item header__nav-list-item--menu-toggler'><a className='header__nav-list-item-link' href="#">Men</a><HeaderNavMenuComponent /></li>
                    <li className='header__nav-list-item header__nav-list-item--menu-toggler'><a className='header__nav-list-item-link' href="#">Beauty</a><HeaderNavMenuComponent /></li>
                    <li className='header__nav-list-item header__nav-list-item--menu-toggler'><a className='header__nav-list-item-link' href="#">Accessories</a><HeaderNavMenuComponent /></li>
                    <li className='header__nav-list-item'><a className='header__nav-list-item-link' href="#">Blog</a></li>
                    <li className='header__nav-list-item'><a className='header__nav-list-item-link' href="#">Contact</a></li>
                </ul>
                <ul className='header__nav-list'>
                    <HeaderNavDropdownLiComponent type='search'></HeaderNavDropdownLiComponent>
                    <HeaderNavDropdownLiComponent type='localization'></HeaderNavDropdownLiComponent>
                    <HeaderNavDropdownLiComponent type='login'></HeaderNavDropdownLiComponent>
                    <HeaderNavDropdownLiComponent type='cart' checkoutCount={props.checkoutCount}></HeaderNavDropdownLiComponent>
                </ul>
                <HeaderNavMobileTogglerComponent checkoutCount={props.checkoutCount}/>
            </div>
        </nav>
    );
}