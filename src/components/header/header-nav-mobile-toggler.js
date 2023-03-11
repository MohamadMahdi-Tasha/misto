// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from "react";
import HeaderNavDropdownsComponent from './header-nav-dropdowns';

// Exporting Header Nav Mobile Toggler Component Functional Component As Default
export default function HeaderNavMobileTogglerComponent() {
    // Creating States
    const [clicksOfToggler, setClicksOfToggler] = useState(0);
    const [isOpened, setOpenedOrClosed] = useState('false');

    // A Function To Handle Click Of Mobile Nav Toggler
    function handleClickOfMobileNavToggler() {
        setClicksOfToggler(prevState => prevState + 1);
        (clicksOfToggler % 2 !== 0)
            ? setOpenedOrClosed('true')
            : setOpenedOrClosed('false')
    }

    // Returning JSX
    return (
        <div className='header__mobile-nav-toggler-holder'>
            <button data-opened={isOpened} className='header__mobile-nav-toggler' onClick={handleClickOfMobileNavToggler}>
                <span className='header__mobile-nav-toggler-icon-rect header__mobile-nav-toggler-icon-rect--left'></span>
                <span className='header__mobile-nav-toggler-icon-rect header__mobile-nav-toggler-icon-rect--mid'></span>
                <span className='header__mobile-nav-toggler-icon-rect header__mobile-nav-toggler-icon-rect--right'></span>
            </button>
            <HeaderNavDropdownsComponent type='mobile-menu' closingFunction={() => setOpenedOrClosed('false')} isOpened={isOpened}/>
        </div>
    );
}
