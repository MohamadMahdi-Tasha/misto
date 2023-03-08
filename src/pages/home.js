// Codes By Mahdi Tasha
// Importing Part
import AdvantageComponent from "../components/advantage";
import SecondSectImg from '../assets/img/home-page/img-sect-2.jpg';
import PageSectionsComponent from "../components/pages/page-sections";
import PageFilterComponent from "../components/pages/page-filter";
import PageProductsListComponent from "../components/pages/page-products-list";
import PageProductsItemComponent from "../components/pages/page-products-item";

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
            </div>
        </div>
    );
}