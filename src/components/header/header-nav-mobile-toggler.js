// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from "react";
import HeaderNavDropdownsComponent from './header-nav-dropdowns';

// Exporting Header Nav Mobile Toggler Component Functional Component As Default
export default function HeaderNavMobileTogglerComponent(props) {
    // Creating States
    const [clicksOfToggler, setClicksOfToggler] = useState(1);
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
            <button data-opened={isOpened} className='header__mobile-nav-toggler' onClick={handleClickOfMobileNavToggler}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg></button>
            <HeaderNavDropdownsComponent checkoutCount={props.checkoutCount} type='mobile-menu' closingFunction={() => setOpenedOrClosed('false')} isOpened={isOpened} />
        </div>
    );
}
