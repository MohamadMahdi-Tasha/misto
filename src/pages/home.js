// Codes By Mahdi Tasha
// Importing Part
import AdvantageComponent from "../components/advantage";
import PageSectionsComponent from "../components/pages/page-sections";
import PageFilterComponent from "../components/pages/page-filter";
import PageProductsListComponent from "../components/pages/page-products-list";
import PageProductsItemComponent from "../components/pages/page-products-item";
import SecondSectImg from '../assets/img/home-page/img-sect-2.jpg';
import ThirdSectImg from '../assets/img/home-page/img-sect-3.jpg';
import FifthSectionImg1 from '../assets/img/home-page/fifth-section/img-1.png';
import FifthSectionImg2 from '../assets/img/home-page/fifth-section/img-2.png';

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
                                    <h4 className='page--home__first-sect__banner__inner-link__subtitle'>your Title text</h4>
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
                    <PageFilterComponent title={'WOMEN’S'}/>
                    <PageProductsListComponent>
                        <PageProductsItemComponent img={SecondSectImg} name={"Women's tracksuit Q109"} price={3800}/>
                        <PageProductsItemComponent img={SecondSectImg} name={"Women's tracksuit Q109"} price={3800}/>
                        <PageProductsItemComponent img={SecondSectImg} name={"Women's tracksuit Q109"} price={3800}/>
                        <PageProductsItemComponent img={SecondSectImg} name={"Women's tracksuit Q109"} price={3800}/>
                        <PageProductsItemComponent img={SecondSectImg} name={"Women's tracksuit Q109"} price={3800}/>
                        <PageProductsItemComponent img={SecondSectImg} name={"Women's tracksuit Q109"} price={3800}/>
                        <PageProductsItemComponent img={SecondSectImg} name={"Women's tracksuit Q109"} price={3800}/>
                        <PageProductsItemComponent img={SecondSectImg} name={"Women's tracksuit Q109"} price={3800}/>
                    </PageProductsListComponent>
                    <a href="#"><button tabIndex='-1' className='page--home__products-see-more-btn'>SEE ALL</button></a>
                </PageSectionsComponent>
                <PageSectionsComponent pageName={'home'} sectionNumber={'third'}>
                    <PageFilterComponent title={'MEN’S'}/>
                    <PageProductsListComponent>
                        <PageProductsItemComponent img={ThirdSectImg} name={"Striped Sweatshirt"} price={3800}/>
                        <PageProductsItemComponent img={ThirdSectImg} name={"Striped Sweatshirt"} price={3800}/>
                        <PageProductsItemComponent img={ThirdSectImg} name={"Striped Sweatshirt"} price={3800}/>
                        <PageProductsItemComponent img={ThirdSectImg} name={"Striped Sweatshirt"} price={3800}/>
                        <PageProductsItemComponent img={ThirdSectImg} name={"Striped Sweatshirt"} price={3800}/>
                        <PageProductsItemComponent img={ThirdSectImg} name={"Striped Sweatshirt"} price={3800}/>
                        <PageProductsItemComponent img={ThirdSectImg} name={"Striped Sweatshirt"} price={3800}/>
                        <PageProductsItemComponent img={ThirdSectImg} name={"Striped Sweatshirt"} price={3800}/>
                    </PageProductsListComponent>
                    <a href="#"><button tabIndex='-1' className='page--home__products-see-more-btn'>SEE ALL</button></a>
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
                <PageSectionsComponent pageName={'home'} sectionNumber={'fourth'}>
                    <div>
                        <img src={FifthSectionImg1} alt="Image Of Man Standing"/>
                        <div>
                            <h3>Special Offer</h3>
                            <h3>Subscribe <br/> And Get 10% Off</h3>
                            <form action="#">
                                <input type="email"/>
                                <button>Subscribe</button>
                            </form>
                        </div>
                        <img src={FifthSectionImg2} alt="Image Of Woman Standing"/>
                    </div>
                </PageSectionsComponent>
            </div>
        </div>
    );
}