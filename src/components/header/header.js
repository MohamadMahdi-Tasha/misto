// Codes By Mahdi Tasha
// Importing Part
import HeaderTopBarComponent from './header-top-bar';
import HeaderNavComponent from './header-nav';

// Exporting Header Component Functional Component As Default
export default function HeaderComponent () {
    return (
        <header className='header'>
            <HeaderTopBarComponent />
            <HeaderNavComponent checkoutCount={2} />
        </header>
    );
}