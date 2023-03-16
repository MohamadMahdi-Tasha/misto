// Codes By Mahdi Tasha
// Importing Part
import PageComponent from "../components/pages/page";
import PageSectionsComponent from "../components/pages/page-sections";
import PageCategoriesBreadCrumbComponent from "../components/bread-crumbs";
import PageProductsItemScoreComponent from "../components/pages/page-products-item-score";
import Image from '../assets/img/home-page/first-section/img-1.jpg'
import AmericanExpressLogo from "../assets/img/footer/img-american-express.png";
import DiscoverLogo from "../assets/img/footer/img-discover.png";
import MasterCardLogo from "../assets/img/footer/img-mastercard.png";
import VisaLogo from "../assets/img/footer/img-visa.png";
import PaypalLogo from "../assets/img/footer/img-paypal.png";
import AESLogo from "../assets/img/footer/img-AES256.png";
import StripeLogo from "../assets/img/footer/img-stripe.png";
import PageProductsListComponent from "../components/pages/page-products-list";

// Exporting Functional Component Of Products Page As Default
export default function ProductPage() {
    // Returning JSX
    return(
        <PageComponent pageName={'product'}>
            <PageSectionsComponent pageName={'product'} sectionNumber={'first'}>
                <PageCategoriesBreadCrumbComponent />
                <button>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 6.20005C13.0483 6.20007 13.5835 6.03319 14.0346 5.72161C14.4857 5.41003 14.8313 4.96851 15.0253 4.45577C15.2194 3.94302 15.2527 3.38335 15.121 2.85118C14.9892 2.31901 14.6986 1.83956 14.2877 1.47658C13.8769 1.1136 13.3652 0.884303 12.8209 0.819172C12.2765 0.754041 11.7252 0.856166 11.2403 1.11197C10.7554 1.36777 10.3599 1.76512 10.1063 2.25119C9.85273 2.73725 9.75312 3.289 9.82073 3.83305L5.37473 6.05605C4.99334 5.68827 4.51217 5.44083 3.99116 5.34455C3.47015 5.24827 2.93232 5.30742 2.44468 5.51461C1.95704 5.72181 1.54114 6.0679 1.24878 6.50977C0.956425 6.95164 0.800537 7.46977 0.800537 7.9996C0.800537 8.52943 0.956425 9.04756 1.24878 9.48943C1.54114 9.9313 1.95704 10.2774 2.44468 10.4846C2.93232 10.6918 3.47015 10.7509 3.99116 10.6547C4.51217 10.5584 4.99334 10.3109 5.37473 9.94315L9.82073 12.1662C9.74198 12.7982 9.88919 13.4377 10.2363 13.9717C10.5835 14.5056 11.1082 14.8997 11.7178 15.0842C12.3274 15.2687 12.9826 15.2318 13.5676 14.98C14.1526 14.7281 14.6297 14.2776 14.9147 13.708C15.1997 13.1384 15.2741 12.4864 15.1248 11.8673C14.9756 11.2481 14.6122 10.7016 14.099 10.3244C13.5858 9.94723 12.9558 9.7636 12.3203 9.80599C11.6848 9.84837 11.0848 10.114 10.6262 10.5561L6.18023 8.33305C6.20747 8.11189 6.20747 7.88822 6.18023 7.66705L10.6262 5.44405C11.1104 5.91205 11.771 6.20005 12.5 6.20005Z" fill="currentColor"/>
                    </svg>
                    Share
                </button>
                <h1>Women's tracksuit Q109</h1>
                <div>
                    <PageProductsItemScoreComponent score={4.5}/>
                    <div>
                        <h6>ID:<span>777</span></h6>
                        <h6>Availability:<span>In Stock</span></h6>
                    </div>
                </div>
            </PageSectionsComponent>
            <PageSectionsComponent pageName={'product'} sectionNumber={'second'}>
                <img src={Image} alt="Women's tracksuit Q109" />
                <div>
                    <h6>COLOR:<span>Blue</span></h6>
                    <hr/>
                    <div>
                        <h6>$379.99</h6>
                        <button>ADD TO CARD</button>
                        <button><svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.31804 2.31804C1.90017 2.7359 1.5687 3.23198 1.34255 3.77795C1.1164 4.32392 1 4.90909 1 5.50004C1 6.09099 1.1164 6.67616 1.34255 7.22213C1.5687 7.7681 1.90017 8.26418 2.31804 8.68204L10 16.364L17.682 8.68204C18.526 7.83812 19.0001 6.69352 19.0001 5.50004C19.0001 4.30656 18.526 3.16196 17.682 2.31804C16.8381 1.47412 15.6935 1.00001 14.5 1.00001C13.3066 1.00001 12.162 1.47412 11.318 2.31804L10 3.63604L8.68204 2.31804C8.26417 1.90017 7.7681 1.5687 7.22213 1.34255C6.67616 1.1164 6.09099 1 5.50004 1C4.90909 1 4.32392 1.1164 3.77795 1.34255C3.23198 1.5687 2.7359 1.90017 2.31804 2.31804V2.31804Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                        <button><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 19H13M1 4L4 5L1 4ZM4 5L1 14C1.8657 14.649 2.91852 14.9999 4.0005 14.9999C5.08248 14.9999 6.1353 14.649 7.001 14L4 5ZM4 5L7 14L4 5ZM4 5L10 3L4 5ZM16 5L19 4L16 5ZM16 5L13 14C13.8657 14.649 14.9185 14.9999 16.0005 14.9999C17.0825 14.9999 18.1353 14.649 19.001 14L16 5ZM16 5L19 14L16 5ZM16 5L10 3L16 5ZM10 1V3V1ZM10 19V3V19ZM10 19H7H10Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                    </div>
                    <hr/>
                    <div>
                        <h6>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 12V2C11 1.73478 10.8946 1.48043 10.7071 1.29289C10.5196 1.10536 10.2652 1 10 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V12C1 12.2652 1.10536 12.5196 1.29289 12.7071C1.48043 12.8946 1.73478 13 2 13H3M11 12C11 12.2652 10.8946 12.5196 10.7071 12.7071C10.5196 12.8946 10.2652 13 10 13H7M11 12V4C11 3.73478 11.1054 3.48043 11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3H14.586C14.8512 3.00006 15.1055 3.10545 15.293 3.293L18.707 6.707C18.8946 6.89449 18.9999 7.14881 19 7.414V12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13H17M11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H13M3 13C3 13.5304 3.21071 14.0391 3.58579 14.4142C3.96086 14.7893 4.46957 15 5 15C5.53043 15 6.03914 14.7893 6.41421 14.4142C6.78929 14.0391 7 13.5304 7 13M3 13C3 12.4696 3.21071 11.9609 3.58579 11.5858C3.96086 11.2107 4.46957 11 5 11C5.53043 11 6.03914 11.2107 6.41421 11.5858C6.78929 11.9609 7 12.4696 7 13M17 13C17 13.5304 16.7893 14.0391 16.4142 14.4142C16.0391 14.7893 15.5304 15 15 15C14.4696 15 13.9609 14.7893 13.5858 14.4142C13.2107 14.0391 13 13.5304 13 13M17 13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11C14.4696 11 13.9609 11.2107 13.5858 11.5858C13.2107 11.9609 13 12.4696 13 13" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            Shipping & Delivery
                        </h6>
                        <h6>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.582 5.99993H1V0.999928L1.582 5.99993ZM1.582 5.99993C2.24585 4.35806 3.43568 2.98284 4.96503 2.08979C6.49438 1.19674 8.2768 0.836341 10.033 1.06507C11.7891 1.2938 13.4198 2.09872 14.6694 3.3537C15.919 4.60869 16.7168 6.24279 16.938 7.99993M1.582 5.99993H6M16.419 11.9999H17V16.9999L16.419 11.9999ZM16.419 11.9999C15.7542 13.6408 14.564 15.015 13.0348 15.9072C11.5056 16.7995 9.72374 17.1595 7.9681 16.9308C6.21246 16.7022 4.5822 15.8978 3.33253 14.6437C2.08287 13.3895 1.28435 11.7564 1.062 9.99993M16.419 11.9999H12" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            Returns & Exchanges
                        </h6>
                        <h6>
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4L8.89 9.26C9.21866 9.47928 9.6049 9.5963 10 9.5963C10.3951 9.5963 10.7813 9.47928 11.11 9.26L19 4M3 15H17C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V13C1 13.5304 1.21071 14.0391 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Ask a question
                        </h6>
                    </div>
                    <div>
                        <div>
                            <h6>guaranteed safe checkout</h6>
                            <div></div>
                        </div>
                        <ul>
                            <li><img src={AmericanExpressLogo} alt="AmericanExpress Logo"/></li>
                            <li><img src={DiscoverLogo} alt="Discover Logo"/></li>
                            <li><img src={MasterCardLogo} alt="MasterCard Logo"/></li>
                            <li><img src={VisaLogo} alt="Visa Logo"/></li>
                            <li><img src={PaypalLogo} alt="Paypal Logo"/></li>
                            <li><img src={AESLogo} alt="AES Logo"/></li>
                            <li><img src={StripeLogo} alt="Stripe Logo"/></li>
                        </ul>
                    </div>
                    <hr/>
                    <div>
                        <h6>ADDITIONAL INFORMATION</h6>
                        <ul>
                            <li>Color: <span>Blue, White, Black, Grey</span></li>
                            <li>Size: <span>XS, S, M, L</span></li>
                            <li>Material: <span>100% Polyester</span></li>
                        </ul>
                    </div>
                    <hr/>
                    <div>
                        <h6>REVIEWS</h6>
                        <div>
                            <div>
                                <PageProductsItemScoreComponent score={4.5}/>
                                <h6><span>2</span>Reviews</h6>
                            </div>
                            <button>
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5H15H5ZM5 9H9H5ZM10 17L6 13H3C2.46957 13 1.96086 12.7893 1.58579 12.4142C1.21071 12.0391 1 11.5304 1 11V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V11C19 11.5304 18.7893 12.0391 18.4142 12.4142C18.0391 12.7893 17.5304 13 17 13H14L10 17Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                Write a review
                            </button>
                        </div>
                        <ul>
                            <li>
                                <div>
                                    <h6>Oleh Chabanov</h6>
                                    <div>
                                        <h6><span>3</span>Month Ago</h6>
                                        <PageProductsItemScoreComponent score={5}/>
                                    </div>
                                </div>
                                <p>On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
                            </li>
                        </ul>
                        <hr/>
                    </div>
                </div>
            </PageSectionsComponent>
            <PageSectionsComponent pageName={'product'} sectionNumber={'third'}>
                <h6>RELATED PRODUCTS</h6>
                <PageProductsListComponent fetchType={'men'} gridType={'row'}/>
            </PageSectionsComponent>
        </PageComponent>
    );
}
