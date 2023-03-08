// Codes By Mahdi Tasha
// Importing Part
import AdvantageComponent from "../components/advantage";
import SecondSectImg from '../assets/img/home-page/img-sect-2.jpg';
import PageSectionsComponent from "../components/page-sections";

// Exporting Home Page Functional Component As Default
export default function HomePage() {
    // Returning JSX
    return (
        <div className='page page--home'>
            <div className='page__inner'>
                <PageSectionsComponent pageName={'home'} sectionNumber={'first'}>
                    <div className='page--home__first-sect__grid-holder'>
                        <div className='page--home__first-sect__banner'>
                            <div className='page--home__first-sect__banner__inner-div'>
                                <a className='page--home__first-sect__banner__inner-link' href='#'>
                                    <h6 className='page--home__first-sect__banner__inner-link__title'>Banner</h6>
                                    <h4 className='page--home__first-sect__banner__inner-link__subtitle'>your Title text </h4>
                                </a>
                            </div>
                        </div>
                        <div className='page--home__first-sect__women'><a className='page--home__first-sect__women__inner-link' href="#">Women</a></div>
                        <div className='page--home__first-sect__men'><a className='page--home__first-sect__men__inner-link' href="#">Men</a></div>
                        <div className='page--home__first-sect__accessories'><a className='page--home__first-sect__accessories__inner-link' href="#">Accsessories</a></div>
                    </div>
                    <AdvantageComponent />
                </PageSectionsComponent>
                <PageSectionsComponent pageName={'home'} sectionNumber={'second'}>
                    <div className='page--home__filter-btns-holder'>
                        <h1 className='page--home__filter-btns-title'>WOMEN’S</h1>
                        <ul className='page--home__filter-btns-list'>
                            <li><button className='page--home__filter-btn'>NEW ARRIVALS</button></li>
                            <li><button className='page--home__filter-btn'>SPECIALS</button></li>
                            <li><button className='page--home__filter-btn'>BESTSELLERS</button></li>
                            <li><button className='page--home__filter-btn'>MOST VIEWED</button></li>
                            <li><button className='page--home__filter-btn'>FEATURED PRODUCTS</button></li>
                        </ul>
                    </div>
                    <ul className='page--home__products-list'>
                        <li className='page--home__products-item'>
                            <a className='page--home__product-link' href="#">
                                <img className='page--home__product-img' src={SecondSectImg} alt="Women's tracksuit Q109"/>
                                <h6 className='page--home__product-name'>Women's tracksuit Q109</h6>
                                <div className='page--home__product-price-and-score-holder'>
                                    <h6 className='page--home__product-price'>$38.00</h6>
                                    <div className='page--home__product-score-holder'>
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.33431 1.04889C5.54431 0.404194 6.45641 0.404194 6.66571 1.04889L7.41471 3.35329C7.46047 3.49364 7.54942 3.61592 7.66886 3.70267C7.78829 3.78941 7.93209 3.83618 8.07971 3.83629H10.5031C11.1814 3.83629 11.4628 4.70429 10.9147 5.10329L8.95471 6.52709C8.83503 6.61391 8.74591 6.7364 8.70014 6.87699C8.65437 7.01758 8.65428 7.16905 8.69991 7.30969L9.44891 9.61409C9.65891 10.2588 8.92041 10.7957 8.37091 10.3967L6.41091 8.97289C6.29135 8.8861 6.1474 8.83935 5.99966 8.83935C5.85192 8.83935 5.70796 8.8861 5.58841 8.97289L3.62841 10.3967C3.07961 10.7957 2.34181 10.2588 2.55111 9.61409L3.30011 7.30969C3.34573 7.16905 3.34565 7.01758 3.29987 6.87699C3.2541 6.7364 3.16498 6.61391 3.04531 6.52709L1.08601 5.10399C0.537906 4.70499 0.820006 3.83699 1.49761 3.83699H3.92031C4.06804 3.83703 4.212 3.79033 4.33157 3.70357C4.45115 3.61681 4.54021 3.49445 4.58601 3.35399L5.33501 1.04959L5.33431 1.04889Z" fill="#F0CC84"/></svg>
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.33431 1.04889C5.54431 0.404194 6.45641 0.404194 6.66571 1.04889L7.41471 3.35329C7.46047 3.49364 7.54942 3.61592 7.66886 3.70267C7.78829 3.78941 7.93209 3.83618 8.07971 3.83629H10.5031C11.1814 3.83629 11.4628 4.70429 10.9147 5.10329L8.95471 6.52709C8.83503 6.61391 8.74591 6.7364 8.70014 6.87699C8.65437 7.01758 8.65428 7.16905 8.69991 7.30969L9.44891 9.61409C9.65891 10.2588 8.92041 10.7957 8.37091 10.3967L6.41091 8.97289C6.29135 8.8861 6.1474 8.83935 5.99966 8.83935C5.85192 8.83935 5.70796 8.8861 5.58841 8.97289L3.62841 10.3967C3.07961 10.7957 2.34181 10.2588 2.55111 9.61409L3.30011 7.30969C3.34573 7.16905 3.34565 7.01758 3.29987 6.87699C3.2541 6.7364 3.16498 6.61391 3.04531 6.52709L1.08601 5.10399C0.537906 4.70499 0.820006 3.83699 1.49761 3.83699H3.92031C4.06804 3.83703 4.212 3.79033 4.33157 3.70357C4.45115 3.61681 4.54021 3.49445 4.58601 3.35399L5.33501 1.04959L5.33431 1.04889Z" fill="#F0CC84"/></svg>
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.33431 1.04889C5.54431 0.404194 6.45641 0.404194 6.66571 1.04889L7.41471 3.35329C7.46047 3.49364 7.54942 3.61592 7.66886 3.70267C7.78829 3.78941 7.93209 3.83618 8.07971 3.83629H10.5031C11.1814 3.83629 11.4628 4.70429 10.9147 5.10329L8.95471 6.52709C8.83503 6.61391 8.74591 6.7364 8.70014 6.87699C8.65437 7.01758 8.65428 7.16905 8.69991 7.30969L9.44891 9.61409C9.65891 10.2588 8.92041 10.7957 8.37091 10.3967L6.41091 8.97289C6.29135 8.8861 6.1474 8.83935 5.99966 8.83935C5.85192 8.83935 5.70796 8.8861 5.58841 8.97289L3.62841 10.3967C3.07961 10.7957 2.34181 10.2588 2.55111 9.61409L3.30011 7.30969C3.34573 7.16905 3.34565 7.01758 3.29987 6.87699C3.2541 6.7364 3.16498 6.61391 3.04531 6.52709L1.08601 5.10399C0.537906 4.70499 0.820006 3.83699 1.49761 3.83699H3.92031C4.06804 3.83703 4.212 3.79033 4.33157 3.70357C4.45115 3.61681 4.54021 3.49445 4.58601 3.35399L5.33501 1.04959L5.33431 1.04889Z" fill="#F0CC84"/></svg>
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.33431 1.04889C5.54431 0.404194 6.45641 0.404194 6.66571 1.04889L7.41471 3.35329C7.46047 3.49364 7.54942 3.61592 7.66886 3.70267C7.78829 3.78941 7.93209 3.83618 8.07971 3.83629H10.5031C11.1814 3.83629 11.4628 4.70429 10.9147 5.10329L8.95471 6.52709C8.83503 6.61391 8.74591 6.7364 8.70014 6.87699C8.65437 7.01758 8.65428 7.16905 8.69991 7.30969L9.44891 9.61409C9.65891 10.2588 8.92041 10.7957 8.37091 10.3967L6.41091 8.97289C6.29135 8.8861 6.1474 8.83935 5.99966 8.83935C5.85192 8.83935 5.70796 8.8861 5.58841 8.97289L3.62841 10.3967C3.07961 10.7957 2.34181 10.2588 2.55111 9.61409L3.30011 7.30969C3.34573 7.16905 3.34565 7.01758 3.29987 6.87699C3.2541 6.7364 3.16498 6.61391 3.04531 6.52709L1.08601 5.10399C0.537906 4.70499 0.820006 3.83699 1.49761 3.83699H3.92031C4.06804 3.83703 4.212 3.79033 4.33157 3.70357C4.45115 3.61681 4.54021 3.49445 4.58601 3.35399L5.33501 1.04959L5.33431 1.04889Z" fill="#F0CC84"/></svg>
                                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.33431 1.04889C5.54431 0.404194 6.45641 0.404194 6.66571 1.04889L7.41471 3.35329C7.46047 3.49364 7.54942 3.61592 7.66886 3.70267C7.78829 3.78941 7.93209 3.83618 8.07971 3.83629H10.5031C11.1814 3.83629 11.4628 4.70429 10.9147 5.10329L8.95471 6.52709C8.83503 6.61391 8.74591 6.7364 8.70014 6.87699C8.65437 7.01758 8.65428 7.16905 8.69991 7.30969L9.44891 9.61409C9.65891 10.2588 8.92041 10.7957 8.37091 10.3967L6.41091 8.97289C6.29135 8.8861 6.1474 8.83935 5.99966 8.83935C5.85192 8.83935 5.70796 8.8861 5.58841 8.97289L3.62841 10.3967C3.07961 10.7957 2.34181 10.2588 2.55111 9.61409L3.30011 7.30969C3.34573 7.16905 3.34565 7.01758 3.29987 6.87699C3.2541 6.7364 3.16498 6.61391 3.04531 6.52709L1.08601 5.10399C0.537906 4.70499 0.820006 3.83699 1.49761 3.83699H3.92031C4.06804 3.83703 4.212 3.79033 4.33157 3.70357C4.45115 3.61681 4.54021 3.49445 4.58601 3.35399L5.33501 1.04959L5.33431 1.04889Z" fill="#E6E6E6"/></svg>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <a href="#"><button tabIndex='-1' className='page--home__products-see-more-btn'>SEE ALL</button></a>
                </PageSectionsComponent>
            </div>
        </div>
    );
}