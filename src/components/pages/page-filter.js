// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from "react";

// Exporting Page Filter Functional Component As Default
export default function PageFilterComponent({title, selectedItemIndex, btnItems}) {
    // Initializing States
    const [isDropDownOpened, setOpenOrCloseOfDropDown] = useState('false');
    const [dropDownTogglerClicks, setDropDownTogglerClicks] = useState(1);
    const [selectedIndex, setSelectedIndex] = useState(selectedItemIndex);

    // Handling Click Of Mobile DropDown Toggler
    function handleClickOfMobileDropDownToggler() {
        setDropDownTogglerClicks(prevState => prevState + 1);

        (dropDownTogglerClicks % 2 !== 0)
            ? setOpenOrCloseOfDropDown('true')
            : setOpenOrCloseOfDropDown('false')
    }

    // Creating Refrence To Buttos Holder
    const refrenceOfButtonsHolder = React.createRef();

    // Returning JSX
    return (
        <div className='page--home__filter-btns-holder'>
            <h1 className='page--home__filter-btns-title'>{title}</h1>
            <div className='page--home__filter-btns-list-holder'>
                <button data-opened={isDropDownOpened} onClick={handleClickOfMobileDropDownToggler} className='page--home__filter-mobile-dropdown-toggler'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path
                            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                </button>
                <ul data-opened={isDropDownOpened} className='page--home__filter-btns-list' ref={refrenceOfButtonsHolder}>
                    {
                        btnItems.map((item) =>
                            <li key={btnItems.indexOf(item)}>
                                <button
                                    data-selected={(selectedItemIndex === btnItems.indexOf(item)) ? 'true' : 'false'}
                                    className='page--home__filter-btn'
                                    onClick={() => {
                                        const IndexOfBtn = btnItems.indexOf(item);
                                        const currentElementOfRef = refrenceOfButtonsHolder.current;
                                        const selectedFilterBtn = currentElementOfRef.querySelector('.page--home__filter-btn[data-selected="true"]');
                                        const buttonToSelect = currentElementOfRef.children[IndexOfBtn].firstElementChild;

                                        selectedFilterBtn.setAttribute('data-selected', 'false');
                                        buttonToSelect.setAttribute('data-selected', 'true');
                                        setSelectedIndex(IndexOfBtn);
                                    }}
                                >{item}</button>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}