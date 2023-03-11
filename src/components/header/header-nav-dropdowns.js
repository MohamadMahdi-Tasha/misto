// Codes By Mahdi Tasha
// Importing Part
import HeaderNavDropdownCollapseComponent from "./header-nav-dropdown-collapse";
import HeaderNavDropdownContentsComponent from './header-nav-dropdown-contents';

// Exporting header dropdown Component Functional Component As Default
export default function HeaderNavDropdownsComponent(props) {
    // A Functional Component For TopSide Of Dropdowns
    function HeaderNavDropdownsTopSideComponent() {
        // Returning JSX
        return (
            <div className='header__nav-dropdown-top'>
                <h6 className='header__nav-dropdown-top-title'>
                    {(props.type.toUpperCase() === 'MOBILE-MENU') ? 'MENU' : props.type.toUpperCase()}
                </h6>
                <button onClick={props.closingFunction} className='header__nav-dropdown-top-close-btn'><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L13 13M1 13L13 1L1 13Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            </div>
        );
    }

    // Returning JSX
    if (props.type === 'localization') {
        return (
            <div className='header__nav-dropdown-holder' data-opened={props.isOpened}>
                <div className='header__nav-dropdown-bg' onClick={props.closingFunction}></div>
                <div className='header__nav-dropdown'>
                    <HeaderNavDropdownsTopSideComponent/>
                    <div className='header__nav-dropdown-content-holder'><HeaderNavDropdownContentsComponent type={'localization'}/></div>
                </div>
            </div>
        );
    } else if (props.type === 'search') {
        return (
            <div className='header__nav-dropdown-holder' data-opened={props.isOpened}>
                <div className='header__nav-dropdown-bg' onClick={props.closingFunction}></div>
                <div className='header__nav-dropdown'>
                    <HeaderNavDropdownsTopSideComponent/>
                    <div className='header__nav-dropdown-content-holder'><HeaderNavDropdownContentsComponent type={'search'}/></div>
                </div>
            </div>
        );
    } else if (props.type === 'login') {
        return (
            <div className='header__nav-dropdown-holder' data-opened={props.isOpened}>
                <div className='header__nav-dropdown-bg' onClick={props.closingFunction}></div>
                <div className='header__nav-dropdown'>
                    <HeaderNavDropdownsTopSideComponent/>
                    <div className='header__nav-dropdown-content-holder'>
                        <HeaderNavDropdownContentsComponent type={'login'}/>
                    </div>
                </div>
            </div>
        );
    } else if (props.type === 'cart') {
        return (
            <div className='header__nav-dropdown-holder' data-opened={props.isOpened}>
                <div className='header__nav-dropdown-bg' onClick={props.closingFunction}></div>
                <div className='header__nav-dropdown'>
                    <HeaderNavDropdownsTopSideComponent/>
                    <div className='header__nav-dropdown-content-holder'><HeaderNavDropdownContentsComponent type={'cart'}/></div>
                </div>
            </div>
        );
    } else if (props.type === 'mobile-menu') {
        return (
            <div className='header__nav-dropdown-holder header__nav-dropdown-holder--mobile-nav' data-opened={props.isOpened}>
                <div className='header__nav-dropdown-bg' onClick={props.closingFunction}></div>
                <div className='header__nav-dropdown'>
                    <HeaderNavDropdownsTopSideComponent />
                    <div className='header__nav-dropdown-content-holder'>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Women</a></li>
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Beauty</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <HeaderNavDropdownContentsComponent type={'localization'}/>
                        <HeaderNavDropdownContentsComponent type={'search'}/>
                        <HeaderNavDropdownContentsComponent type={'login'}/>
                        <HeaderNavDropdownContentsComponent type={'cart'}/>
                    </div>
                </div>
            </div>
        );
    }
}
