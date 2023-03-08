// Codes By Mahdi Tasha
// Importing Part
import TopSideOfFooterComponent from './top-side-Of-footer';
import MiddleSideOfFooterComponent from './middle-side-Of-footer';
import BottomSideOfFooterComponent from './bottom-side-Of-footer';

// Exporting Footer Functional Component As Default
export default function FooterComponent() {
    // Returning JSX
    return (
        <footer className='footer'>
            <TopSideOfFooterComponent />
            <MiddleSideOfFooterComponent />
            <BottomSideOfFooterComponent />
        </footer>
    );
}
