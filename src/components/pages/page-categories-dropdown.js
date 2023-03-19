// Codes By Mahdi Tasha
// Importing Parts
import React, { useState } from "react";

// Exporting Page Categories DropDown Component Functional Component As Default
export default function PageCategoriesDropdownComponenet({list, activeIndex}) {
    // Creating State For Component
    const [isOpened, setOpenedOrClosed] = useState(false);
    const [timesClickedOnToggler, setTimesClickedOnToggler] = useState(1);
    const [selectedElement, setSelectedItem] = useState(list[activeIndex]);

    // Creating Refs
    const listRefrence = React.createRef();

    // Handling Clicks Of Toggler
    function handleClickOfToggler() {
        setTimesClickedOnToggler(prevState => prevState + 1);
        (timesClickedOnToggler % 2 !== 0) ? setOpenedOrClosed(true) : setOpenedOrClosed(false)
    }

    // Returning JSX
    return (
        <div className='page__categories-filter-dropdown-holder' data-opened={isOpened}>
            <button className='page__categories-filter-dropdown-btn' onClick={handleClickOfToggler}>
                <span>{selectedElement}</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.08325 1.25L4.99992 5.33333L0.916587 1.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <ul className="page__categories-filter-dropdown" ref={listRefrence}>
                {
                    list.map(item => <li key={list.indexOf(item)}>
                            <button
                                tabIndex='-1'
                                data-selected={(activeIndex === list.indexOf(item)) ? 'true' : 'false'}
                                onClick={() => {
                                    const currentOfList = listRefrence.current;
                                    const indexOfItemInListArray = list.indexOf(item);
                                    const itemToSelect = currentOfList.children[indexOfItemInListArray].firstElementChild;
                                    const itemToDisable = currentOfList.querySelector('button[data-selected="true"]');

                                    itemToDisable.setAttribute('data-selected', 'false');
                                    itemToSelect.setAttribute('data-selected', 'true');
                                    setSelectedItem(itemToSelect.textContent)
                                }}>{item}</button>
                    </li>)
                }
            </ul>
        </div>
    );
}