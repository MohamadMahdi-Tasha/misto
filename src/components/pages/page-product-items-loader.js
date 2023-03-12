// Codes By Mahdi Tasha
// Exporting Page Products List Items Loader Component As Functional Component
export default function PageProductItemsLoaderComponent() {
    // Returning JSX
    return(
        <li className='page__products-item-loader'>
            <div className='page__products-item-loader__img'></div>
            <div className='page__products-item-loader__title'></div>
            <div className='page__products-item-loader__bottom-holder'>
                <div className='page__products-item-loader__price'></div>
                <div className='page__products-item-loader__score'></div>
            </div>
        </li>
    );
}