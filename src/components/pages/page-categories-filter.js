// Codes By Mahdi Tasha
// Importing Part

// Exporting Page Categories Filter Component As Functional Component
export default function PageCategoriesFilterComponent(props){
    // Returning JSX
    return (
        <div className='page__categories-filter-bottom-side' data-opened={props.isOpened}>
            <div className='page__categories-filter-side-item'>
                <h6>Colors</h6>
                <div>
                    <ul>
                        <li><span></span>Black</li>
                        <li><span></span>Cyan</li>
                        <li><span></span>Green</li>
                        <li><span></span>Grey</li>
                        <li><span></span>Pink</li>
                        <li><span></span>White</li>
                        <li><span></span>Blue</li>
                        <li><span></span>Orange</li>
                        <li><span></span>Violet</li>
                        <li><span></span>Sale</li>
                        <li><span></span>Purple</li>
                    </ul>
                </div>
            </div>
            <div className='page__categories-filter-side-item'>
                <h6>Size</h6>
                <div>
                    <ul>
                        <li><input type="checkbox"/> XL</li>
                        <li><input type="checkbox"/> L</li>
                        <li><input type="checkbox"/> M</li>
                        <li><input type="checkbox"/> S</li>
                        <li><input type="checkbox"/> Xs</li>
                    </ul>
                </div>
            </div>
            <div className='page__categories-filter-side-item'>
                <h6>Brand</h6>
                <div>
                    <ul>
                        <li><input type="checkbox"/> Ck</li>
                        <li><input type="checkbox"/> H&M</li>
                        <li><input type="checkbox"/> Kalles</li>
                        <li><input type="checkbox"/> Levi's</li>
                        <li><input type="checkbox"/> Monki</li>
                        <li><input type="checkbox"/> Nike</li>
                    </ul>
                </div>
            </div>
            <div className='page__categories-filter-side-item'>
                <h6>Price</h6>
                <div>
                    <ul>
                        <li><input type="checkbox"/> $1200+</li>
                        <li><input type="checkbox"/> $600-$1200</li>
                        <li><input type="checkbox"/> $300-$600</li>
                        <li><input type="checkbox"/> $150-$300</li>
                        <li><input type="checkbox"/> $50-$150</li>
                        <li><input type="checkbox"/> $7-$50</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
