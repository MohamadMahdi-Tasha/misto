// Codes By Mahdi Tasha
// Exporting Page Categories Filter Component As Functional Component
export default function PageCategoriesFilterComponent({isOpened}){
    // A Little Component Of Colors
    function ColorListItemComponent({color}) {
        // Returning JSX
        return(
            <li className='page__categories-filter-side-color-li'>
                <span style={{backgroundColor: color}}></span>
                {color}
            </li>
        );
    }

    // Returning JSX
    return (
        <div className='page__categories-filter-bottom-side' data-opened={isOpened}>
            <div className='page__categories-filter-side-item'>
                <h6 className='page__categories-filter-side-title'>Colors</h6>
                <div className='page__categories-filter-side-scroll-holder'>
                    <ul className='page__categories-filter-side-list'>
                        <ColorListItemComponent color={'Black'} />
                        <ColorListItemComponent color={'Cyan'} />
                        <ColorListItemComponent color={'Green'} />
                        <ColorListItemComponent color={'Grey'} />
                        <ColorListItemComponent color={'Pink'} />
                        <ColorListItemComponent color={'White'} />
                        <ColorListItemComponent color={'Blue'} />
                        <ColorListItemComponent color={'Orange'} />
                        <ColorListItemComponent color={'Violet'} />
                        <ColorListItemComponent color={'chartreuse'} />
                        <ColorListItemComponent color={'Purple'} />
                    </ul>
                </div>
            </div>
            <div className='page__categories-filter-side-item'>
                <h6 className='page__categories-filter-side-title'>Size</h6>
                <div className='page__categories-filter-side-scroll-holder'>
                    <ul className='page__categories-filter-side-list'>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> XL</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> L</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> M</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> S</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> Xs</label></li>
                    </ul>
                </div>
            </div>
            <div className='page__categories-filter-side-item'>
                <h6 className='page__categories-filter-side-title'>Brand</h6>
                <div className='page__categories-filter-side-scroll-holder'>
                    <ul className='page__categories-filter-side-list'>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> Ck</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> H&M</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> Kalles</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> Levi's</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> Monki</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> Nike</label></li>
                    </ul>
                </div>
            </div>
            <div className='page__categories-filter-side-item'>
                <h6 className='page__categories-filter-side-title'>Price</h6>
                <div className='page__categories-filter-side-scroll-holder'>
                    <ul className='page__categories-filter-side-list'>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> $1200+</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> $600-$1200</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> $300-$600</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> $150-$300</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> $50-$150</label></li>
                        <li className='page__categories-filter-side-chckbox-li'><label><input tabIndex='-1' type="checkbox"/> $7-$50</label></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
