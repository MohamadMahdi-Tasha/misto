// Codes By Mahdi Tasha
// Importing Part
import React, {useEffect} from "react";
import HeaderTopBarComponent from './header-top-bar';
import HeaderNavComponent from './header-nav';

// Exporting Header Component Functional Component As Default
export default function HeaderComponent () {
    // Creating Reference For Header
    const headerRefrence = React.createRef();

    // Using 'useEffect' Hook To Add Class Name Of 'header--opened' To Header
    useEffect(() => headerRefrence.current.classList.add('header--opened'))

    // Returning JSX
    return (
        <header className='header' ref={headerRefrence}>
            <HeaderTopBarComponent />
            <HeaderNavComponent checkoutCount={0} />
        </header>
    );
}