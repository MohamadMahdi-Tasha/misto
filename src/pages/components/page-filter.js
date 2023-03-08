// Codes By Mahdi Tasha
// Exporting Page Filter Functional Component As Default
export default function PageFilterComponent(props) {
    // Returning JSX
    return (
        <div className='page--home__filter-btns-holder'>
            <h1 className='page--home__filter-btns-title'>{props.title}</h1>
            <ul className='page--home__filter-btns-list'>
                <li><button className='page--home__filter-btn'>NEW ARRIVALS</button></li>
                <li><button className='page--home__filter-btn'>SPECIALS</button></li>
                <li><button className='page--home__filter-btn'>BESTSELLERS</button></li>
                <li><button className='page--home__filter-btn'>MOST VIEWED</button></li>
                <li><button className='page--home__filter-btn'>FEATURED PRODUCTS</button></li>
            </ul>
        </div>
    );
}