// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from "react";
import DropDownComponent from '../dropdown';

// Exporting Page Filter Functional Component As Default
export default function PageFilterComponent({title, selectedItemIndex, btnItems}) {
    // Creating State For Index Of Selected Dropdown
    const [numberOfSelectedDropDown, setNumberOfSelectedDropDown] =  useState(selectedItemIndex);

    // Creating Refrence To Buttos Holder
    const refreneOfButtonsHolder = React.createRef();

    // Returning JSX
    return (
        <div className='page--home__filter-btns-holder'>
            <h1 className='page--home__filter-btns-title'>{title}</h1>
            <ul className='page--home__filter-btns-list' ref={refreneOfButtonsHolder}>
                {
                    btnItems.map((item) =>
                        <li key={btnItems.indexOf(item)}>
                            <button
                                data-selected={(selectedItemIndex === btnItems.indexOf(item)) ? 'true' : 'false'}
                                className='page--home__filter-btn'
                                onClick={() => {
                                    const IndexOfBtn = btnItems.indexOf(item);
                                    const currentElementOfRef = refreneOfButtonsHolder.current;
                                    const selectedFilterBtn = currentElementOfRef.querySelector('.page--home__filter-btn[data-selected="true"]');
                                    const buttonToSelect = currentElementOfRef.children[IndexOfBtn].firstElementChild;

                                    setNumberOfSelectedDropDown(IndexOfBtn);
                                    selectedFilterBtn.setAttribute('data-selected', 'false');
                                    buttonToSelect.setAttribute('data-selected', 'true');
                                }}
                                >{item}</button>
                        </li>
                    )
                }
            </ul>
            <DropDownComponent btnItems={btnItems} selectedItemIndex={numberOfSelectedDropDown}/>
        </div>
    );
}