// Codes By Mahdi Tasha
// Exporting Page Categories Filter Component As Functional Component
export default function PageCategoriesFilterComponent(props){
    // Returning JSX
    return (
        <div className='page__categories-filter-bottom-side' data-opened={'true'}>
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
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> XL</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> L</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> M</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> S</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> Xs</label></li>
                    </ul>
                </div>
            </div>
            <div className='page__categories-filter-side-item'>
                <h6 className='page__categories-filter-side-title'>Brand</h6>
                <div className='page__categories-filter-side-scroll-holder'>
                    <ul className='page__categories-filter-side-list'>
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> Ck</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> H&M</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> Kalles</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> Levi's</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> Monki</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> Nike</label></li>
                    </ul>
                </div>
            </div>
            <div className='page__categories-filter-side-item'>
                <h6 className='page__categories-filter-side-title'>Price</h6>
                <div className='page__categories-filter-side-scroll-holder'>
                    <ul className='page__categories-filter-side-list'>
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> $1200+</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> $600-$1200</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> $300-$600</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> $150-$300</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> $50-$150</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input type="checkbox"/> $7-$50</label></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
