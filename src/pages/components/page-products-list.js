// Codes By Mahdi Tasha
// Exporting Page Products List Functional Component As Default
export default function PageProductsListComponent({children}) {
    // Returning JSX
    return (
        <ul className='page--home__products-list'>{children}</ul>
    );
}