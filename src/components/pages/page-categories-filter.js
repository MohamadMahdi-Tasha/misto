// Codes By Mahdi Tasha
// Importing Part

// Exporting Page Categories Filter Component As Functional Component
export default function PageCategoriesFilterComponent(props){
    // Returning JSX
    return (
        <div className='page__categories-filter-bottom-side' data-opened={props.isOpened}>
            <div className='page__categories-filter-side-item'>
                <h6 className='page__categories-filter-side-title'>Colors</h6>
                <div className='page__categories-filter-side-scroll-holder'>
                    <ul className='page__categories-filter-side-list'>
                        <li className='page__categories-filter-side-color-li'><span></span>Black</li>
                        <li className='page__categories-filter-side-color-li'><span></span>Cyan</li>
                        <li className='page__categories-filter-side-color-li'><span></span>Green</li>
                        <li className='page__categories-filter-side-color-li'><span></span>Grey</li>
                        <li className='page__categories-filter-side-color-li'><span></span>Pink</li>
                        <li className='page__categories-filter-side-color-li'><span></span>White</li>
                        <li className='page__categories-filter-side-color-li'><span></span>Blue</li>
                        <li className='page__categories-filter-side-color-li'><span></span>Orange</li>
                        <li className='page__categories-filter-side-color-li'><span></span>Violet</li>
                        <li className='page__categories-filter-side-color-li'><span></span>Sale</li>
                        <li className='page__categories-filter-side-color-li'><span></span>Purple</li>
                    </ul>
                </div>
            </div>
            <div className='page__categories-filter-side-item'>
                <h6 className='page__categories-filter-side-title'>Size</h6>
                <div className='page__categories-filter-side-scroll-holder'>
                    <ul className='page__categories-filter-side-list'>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> XL</li>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> L</li>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> M</li>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> S</li>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> Xs</li>
                    </ul>
                </div>
            </div>
            <div className='page__categories-filter-side-item'>
                <h6 className='page__categories-filter-side-title'>Brand</h6>
                <div className='page__categories-filter-side-scroll-holder'>
                    <ul className='page__categories-filter-side-list'>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> Ck</li>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> H&M</li>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> Kalles</li>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> Levi's</li>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> Monki</li>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> Nike</li>
                    </ul>
                </div>
            </div>
            <div className='page__categories-filter-side-item'>
                <h6 className='page__categories-filter-side-title'>Price</h6>
                <div className='page__categories-filter-side-scroll-holder'>
                    <ul className='page__categories-filter-side-list'>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> $1200+</li>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> $600-$1200</li>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> $300-$600</li>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> $150-$300</li>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> $50-$150</li>
                        <li className='page__categories-filter-side-chckbox-li'><input type="checkbox"/> $7-$50</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
