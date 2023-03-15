// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from "react";
import PageCategoriesDropdownComponenet from "./page-categories-dropdown";
import PageCategoriesFilterComponent from "./page-categories-filter";

// Exporting Page Categories Filter Component As Functional Component
export default function PageCategoriesFilterHolderComponent(props) {
    // Creating State
    const [isFilterOpened, setFilterOpenedOrClosed] = useState(false);

    // Returning JSX
    return (
        <div className='page__categories-filter-holder'>
            <div className='page__categories-filter-top-side'>
                <button data-opened={isFilterOpened} onClick={() => setFilterOpenedOrClosed(false)} className='page__categories-filter-btn'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4.00004V1.33337M12 4.00004C11.2928 4.00004 10.6145 4.28099 10.1144 4.78109C9.61433 5.28119 9.33337 5.95946 9.33337 6.66671C9.33337 7.37395 9.61433 8.05223 10.1144 8.55232C10.6145 9.05242 11.2928 9.33337 12 9.33337M12 4.00004C12.7073 4.00004 13.3856 4.28099 13.8857 4.78109C14.3858 5.28119 14.6667 5.95946 14.6667 6.66671C14.6667 7.37395 14.3858 8.05223 13.8857 8.55232C13.3856 9.05242 12.7073 9.33337 12 9.33337M12 9.33337V22.6667M4.00004 20C4.70728 20 5.38556 19.7191 5.88566 19.219C6.38576 18.7189 6.66671 18.0406 6.66671 17.3334C6.66671 16.6261 6.38576 15.9479 5.88566 15.4478C5.38556 14.9477 4.70728 14.6667 4.00004 14.6667M4.00004 20C3.2928 20 2.61452 19.7191 2.11442 19.219C1.61433 18.7189 1.33337 18.0406 1.33337 17.3334C1.33337 16.6261 1.61433 15.9479 2.11442 15.4478C2.61452 14.9477 3.2928 14.6667 4.00004 14.6667M4.00004 20V22.6667M4.00004 14.6667V1.33337M20 20C20.7073 20 21.3856 19.7191 21.8857 19.219C22.3858 18.7189 22.6667 18.0406 22.6667 17.3334C22.6667 16.6261 22.3858 15.9479 21.8857 15.4478C21.3856 14.9477 20.7073 14.6667 20 14.6667M20 20C19.2928 20 18.6145 19.7191 18.1144 19.219C17.6143 18.7189 17.3334 18.0406 17.3334 17.3334C17.3334 16.6261 17.6143 15.9479 18.1144 15.4478C18.6145 14.9477 19.2928 14.6667 20 14.6667M20 20V22.6667M20 14.6667V1.33337" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    FILTER
                </button>
                <div className='page__categories-filter-grid-btns-holder'>
                    <button ref={props.refOfGridColBtn} onClick={props.onClickOfGridColBtn} data-selected='false' className='page__categories-filter-grid-btns'>
                        <svg width="18" height="18" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13H17M1 1H17H1ZM1 5H17H1ZM1 9H17H1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button ref={props.refOfGridRowBtn} onClick={props.onClickOfGridRowBtn} data-selected='true' className='page__categories-filter-grid-btns'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H5C5.53043 1 6.03914 1.21071 6.41421 1.58579C6.78929 1.96086 7 2.46957 7 3V5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7H3C2.46957 7 1.96086 6.78929 1.58579 6.41421C1.21071 6.03914 1 5.53043 1 5V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 3C11 2.46957 11.2107 1.96086 11.5858 1.58579C11.9609 1.21071 12.4696 1 13 1H15C15.5304 1 16.0391 1.21071 16.4142 1.58579C16.7893 1.96086 17 2.46957 17 3V5C17 5.53043 16.7893 6.03914 16.4142 6.41421C16.0391 6.78929 15.5304 7 15 7H13C12.4696 7 11.9609 6.78929 11.5858 6.41421C11.2107 6.03914 11 5.53043 11 5V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1 13C1 12.4696 1.21071 11.9609 1.58579 11.5858C1.96086 11.2107 2.46957 11 3 11H5C5.53043 11 6.03914 11.2107 6.41421 11.5858C6.78929 11.9609 7 12.4696 7 13V15C7 15.5304 6.78929 16.0391 6.41421 16.4142C6.03914 16.7893 5.53043 17 5 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15V13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 13C11 12.4696 11.2107 11.9609 11.5858 11.5858C11.9609 11.2107 12.4696 11 13 11H15C15.5304 11 16.0391 11.2107 16.4142 11.5858C16.7893 11.9609 17 12.4696 17 13V15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17H13C12.4696 17 11.9609 16.7893 11.5858 16.4142C11.2107 16.0391 11 15.5304 11 15V13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <PageCategoriesDropdownComponenet list={['BESTSELLERS', 'SPECIALS', 'MOST VIEWED', 'FEATURED PRODUCTS']} activeIndex={0}/>
            </div>
            <PageCategoriesFilterComponent isOpened={isFilterOpened}/>
        </div>
    );
}