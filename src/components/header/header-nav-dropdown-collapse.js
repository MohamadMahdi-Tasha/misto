// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from "react";

// Exporting header dropdown Collapse Component Functional Component As Default
export default function HeaderNavDropdownCollapseComponent(props) {
    // Setting StateS
    const [isCollapseOpened, setCloseOrOpenOnCollapse] = useState(false);
    const [timesClickedOnToggler, setTimesClickedOnToggler] = useState(0);


    // A Function To Handle Clicks Of Toggler Button
    function handleTogglerButtonClick() {
        setTimesClickedOnToggler((prevState) => prevState + 1)

        if (timesClickedOnToggler % 2 === 0) {
            setCloseOrOpenOnCollapse(true)
        } else {
            setCloseOrOpenOnCollapse(false)
        }
    }

    // Returning JSX
    return (
        <div className='header__nav-dropdown-collapse-holder' data-opened={isCollapseOpened}>
            <button onClick={handleTogglerButtonClick} className='header__nav-dropdown-collapse-toggler'>
                <span>All Categories</span>
                <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1L8 8L1 0.999999" stroke="#121212" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <ul className='header__nav-dropdown-collapse'>
                {props.list.map(item => <li key={props.list.indexOf(item)}><button tabIndex='-1' className='header__nav-dropdown-collapse-btn'>{item}</button></li>)}
            </ul>
        </div>
    );
}