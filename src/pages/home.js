// Codes By Mahdi Tasha
// Importing Part
import { Link } from 'react-router-dom';
import PageComponent from "../components/pages/page";
import AdvantageComponent from "../components/advantage";
import PageSectionsComponent from "../components/pages/page-sections";
import PageFilterComponent from "../components/pages/page-filter";
import PageProductsListComponent from "../components/pages/page-products-list";
import PageBlogPostComponent from "../components/pages/blog-post";
import PageBlogPostHolderComponent from "../components/pages/blog-post-holder";
import FifthSectionImg1 from '../assets/img/home-page/fifth-section/img-1.png';
import FifthSectionImg2 from '../assets/img/home-page/fifth-section/img-2.png';
import SixthSectionImg1 from '../assets/img/home-page/sixth-section/img-1.png';
import SixthSectionImg2 from '../assets/img/home-page/sixth-section/img-2.jpg';
import SixthSectionImg3 from '../assets/img/home-page/sixth-section/img-3.jpg';

// Exporting Home Page Functional Component As Default
export default function HomePage() {
    // Returning JSX
    return (
        <PageComponent pageName={'home'}>
            <PageSectionsComponent pageName={'home'} sectionNumber={'first'}>
                <div className='page--home__first-sect__grid-holder'>
                    <div className='page--home__first-sect__banner'>
                        <div className='page--home__first-sect__banner__inner-div'>
                            <a className='page--home__first-sect__banner__inner-link' href='#'>
                                <h6 className='page--home__first-sect__banner__inner-link__title'>Banner</h6>
                                <h4 className='page--home__first-sect__banner__inner-link__subtitle'>your Title text</h4>
                            </a>
                        </div>
                    </div>
                    <div className='page--home__first-sect__women'><Link to={'/categories/women'} className='page--home__first-sect__women__inner-link'>Women</Link></div>
                    <div className='page--home__first-sect__men'><Link to={'/categories/men'} className='page--home__first-sect__men__inner-link'>Men</Link></div>
                    <div className='page--home__first-sect__accessories'><a className='page--home__first-sect__accessories__inner-link' href="#">Accsessories</a></div>
                </div>
                <AdvantageComponent />
            </PageSectionsComponent>
            <PageSectionsComponent pageName={'home'} sectionNumber={'second'}>
                <PageFilterComponent btnItems={['SPECIALS', 'BESTSELLERS', 'MOST VIEWED', 'FEATURED PRODUCTS']} selectedItemIndex={0} title={'WOMEN’S'}/>
                <PageProductsListComponent fetchType={'women'}/>
                <Link to="/categories/women"><button tabIndex='-1' className='page--home__products-see-more-btn'>SEE ALL</button></Link>
            </PageSectionsComponent>
            <PageSectionsComponent pageName={'home'} sectionNumber={'third'}>
                <PageFilterComponent btnItems={['SPECIALS', 'BESTSELLERS', 'MOST VIEWED', 'FEATURED PRODUCTS']} selectedItemIndex={0} title={'MEN’S'}/>
                <PageProductsListComponent fetchType={'men'}/>
                <Link to="/categories/men"><button tabIndex='-1' className='page--home__products-see-more-btn'>SEE ALL</button></Link>
            </PageSectionsComponent>
            <PageSectionsComponent pageName={'home'} sectionNumber={'fourth'}>
                <div className='page--home__fourth-sect__banner-holder'>
                    <div className='page--home__fourth-sect__banner page--home__fourth-sect__banner--1'>
                        <a className='page--home__fourth-sect__banner__link' href="#">
                            <h6 className='page--home__fourth-sect__banner__inner-link__title'>New Season</h6>
                            <h4 className='page--home__fourth-sect__banner__inner-link__subtitle'>lookbook collection</h4>
                        </a>
                    </div>
                    <div className='page--home__fourth-sect__banner page--home__fourth-sect__banner--2'>
                        <a className='page--home__fourth-sect__banner__link' href="#">
                            <h6 className='page--home__fourth-sect__banner__inner-link__title'>Sale</h6>
                            <h4 className='page--home__fourth-sect__banner__inner-link__subtitle'>Get UP to <span className='discount-txt-span'>50% off</span></h4>
                        </a>
                    </div>
                </div>
            </PageSectionsComponent>
            <PageSectionsComponent pageName={'home'} sectionNumber={'fifth'}>
                <div className='page--home__fifth-sect__inner'>
                    <img className='page--home__fifth-sect__img-1' src={FifthSectionImg1} alt="Image Of Man Standing"/>
                    <div className='page--home__fifth-sect__content-holder'>
                        <h3 className='page--home__fifth-sect__title'>Special Offer</h3>
                        <h3 className='page--home__fifth-sect__subtitle'>Subscribe <br/> And <span className='discount-txt-span'>Get 10% Off</span></h3>
                        <form action="#">
                            <input className='page--home__fifth-sect__input' placeholder='Enter your email' required type="email"/>
                            <button className='page--home__fifth-sect__btn'>Subscribe</button>
                        </form>
                    </div>
                    <img className='page--home__fifth-sect__img-2' src={FifthSectionImg2} alt="Image Of Woman Standing"/>
                </div>
            </PageSectionsComponent>
            <PageSectionsComponent pageName={'home'} sectionNumber={'sixth'}>
                <div className='page--home__sixth-sect__top-side'>
                    <h1 className='page--home__sixth-sect__top-side-title'>LATEST FROM BLOG</h1>
                    <a className='page--home__sixth-sect__top-side-link' href="#">SEE ALL</a>
                </div>
                <PageBlogPostHolderComponent>
                    <PageBlogPostComponent img={SixthSectionImg1} name={'The Easiest Way to Break'} pargraph={'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor'} date={'April 6, 2032'}/>
                    <PageBlogPostComponent img={SixthSectionImg2} name={'Wedding Season'} pargraph={'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor'} date={'April 6, 2032'}/>
                    <PageBlogPostComponent img={SixthSectionImg3} name={'Recent Favorites On Repeat'} pargraph={'But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor'} date={'April 6, 2032'}/>
                </PageBlogPostHolderComponent>
            </PageSectionsComponent>
        </PageComponent>
    );
}