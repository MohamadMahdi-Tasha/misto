// Codes By Mahdi Tasha
// Importing Part
import React from 'react';

// Exporting Dropdown Functional Component As Default
export default function dropdownComponent({btnItems, selectedItemIndex}) {
    // Creating Refrence To DropDown Holder
    const dropDownHolderRefrence = React.createRef();

    // A Function To Handle Click Of DropDown Toggler
    function handleClickOfDropDownToggler() {
        dropDownHolderRefrence.current.toggleAttribute('data-opened');
    }

    // Returning JSX
    return (
        <div className='dropdown__holder' ref={dropDownHolderRefrence}>
            <button className='dropdown__toggler' onClick={handleClickOfDropDownToggler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </button>
            <div className='dropdown'>
                <ul className='dropdown__list'>
                    {
                        btnItems.map((item) =>
                            <li key={btnItems.indexOf(item)}>
                                <button data-selected={(selectedItemIndex === btnItems.indexOf(item)) ? 'true' : 'false'}
                                        className='dropdown__btn'>{item}</button>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}