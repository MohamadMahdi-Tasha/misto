// Codes By Mahdi Tasha
// Importing Part
import React from 'react';
import logoTypo from '../../assets/img/header/img-logo-typo.svg';
import HeaderNavMenuComponent from "./header-nav-menu";
import HeaderNavDropdownLiComponent from "./header-nav-dropdown-li";
import HeaderNavMobileTogglerComponent from './header-nav-mobile-toggler';
import { Link } from "react-router-dom";

// Exporting Header Nav Component Functional Component As Default
export default function HeaderNavComponent (props) {
    // Returning JSX
    return (
        <nav className='header__nav'>
            <div className="header__nav-inner">
                <Link to="/"><img className='header__nav-img' src={logoTypo} alt="Misto Logo"/></Link>
                <ul className='header__nav-list'>
                    <li className='header__nav-list-item'><a className='header__nav-list-item-link' href="#">About Us</a></li>
                    <li className='header__nav-list-item header__nav-list-item--menu-toggler'><Link className='header__nav-list-item-link' to="/categories/women">Women</Link><HeaderNavMenuComponent type={'women'}/></li>
                    <li className='header__nav-list-item header__nav-list-item--menu-toggler'><Link className='header__nav-list-item-link' to="/categories/men">Men</Link><HeaderNavMenuComponent type={'men'}/></li>
                    <li className='header__nav-list-item header__nav-list-item--menu-toggler'><a className='header__nav-list-item-link' href="#">Beauty</a><HeaderNavMenuComponent type={'beauty'}/></li>
                    <li className='header__nav-list-item header__nav-list-item--menu-toggler'><a className='header__nav-list-item-link' href="#">Accessories</a><HeaderNavMenuComponent type={'accessories'}/></li>
                    <li className='header__nav-list-item'><a className='header__nav-list-item-link' href="#">Blog</a></li>
                    <li className='header__nav-list-item'><a className='header__nav-list-item-link' href="#">Contact</a></li>
                </ul>
                <ul className='header__nav-list'>
                    <HeaderNavDropdownLiComponent type='search' />
                    <HeaderNavDropdownLiComponent type='localization' />
                    <HeaderNavDropdownLiComponent type='login' />
                    <HeaderNavDropdownLiComponent type='cart' checkoutCount={props.checkoutCount} />
                </ul>
                <HeaderNavMobileTogglerComponent checkoutCount={props.checkoutCount}/>
            </div>
        </nav>
    );
}