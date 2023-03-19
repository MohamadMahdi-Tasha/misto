// Codes By Mahdi Tahsa
// Importing Part
import HeaderNavDropdownCartLiComponent from "./header-nav-dropdown-cart-li";
import HeaderNavDropdownCollapseComponent from "./header-nav-dropdown-collapse";
import HeaderNavDropdownInsprationItemComponent from "./header-nav-dropdown-inspration-item";
import {CardProductsContext, LikedProductsContext} from "../../index";

// Exporting Contents Of Each dropdown Component as Functional Component As Default
export default function HeaderNavDropdownContentsComponent(props) {
    if (props.type === 'localization') {
        return (
            <>
                <h6 className='header__nav-dropdown-title'>Language</h6>
                <form className='header__nav-dropdown-radio-form' action="#">
                    <div className='header__nav-dropdown-radio-holder'>
                        <input tabIndex='-1' className='header__nav-dropdown-radio' name='langRadio' id='english'
                               type="radio"/>
                        <label className='header__nav-dropdown-radio-label' htmlFor="english">English</label>
                    </div>
                    <div className='header__nav-dropdown-radio-holder'>
                        <input tabIndex='-1' className='header__nav-dropdown-radio' name='langRadio' id='Українська'
                               type="radio"/>
                        <label className='header__nav-dropdown-radio-label'
                               htmlFor="Українська">Українська</label>
                    </div>
                    <div className='header__nav-dropdown-radio-holder'>
                        <input tabIndex='-1' className='header__nav-dropdown-radio' name='langRadio' id='Français'
                               type="radio"/>
                        <label className='header__nav-dropdown-radio-label' htmlFor="Français">Français</label>
                    </div>
                    <div className='header__nav-dropdown-radio-holder'>
                        <input tabIndex='-1' className='header__nav-dropdown-radio' name='langRadio' id='Español'
                               type="radio"/>
                        <label className='header__nav-dropdown-radio-label' htmlFor="Español">Español</label>
                    </div>
                    <div className='header__nav-dropdown-radio-holder'>
                        <input tabIndex='-1' className='header__nav-dropdown-radio' name='langRadio' id='Polskie'
                               type="radio"/>
                        <label className='header__nav-dropdown-radio-label' htmlFor="Polskie">Polskie</label>
                    </div>
                    <div className='header__nav-dropdown-radio-holder'>
                        <input tabIndex='-1' className='header__nav-dropdown-radio' name='langRadio' id='Türkçe'
                               type="radio"/>
                        <label className='header__nav-dropdown-radio-label' htmlFor="Türkçe">Türkçe</label>
                    </div>
                    <div className='header__nav-dropdown-radio-holder'>
                        <input tabIndex='-1' className='header__nav-dropdown-radio' name='langRadio' id='한국어' type="radio"/>
                        <label className='header__nav-dropdown-radio-label' htmlFor="한국어">한국어</label>
                    </div>
                </form>
                <h6 className='header__nav-dropdown-title'>Currency</h6>
                <form className='header__nav-dropdown-radio-form' action="#">
                    <div className='header__nav-dropdown-radio-holder'>
                        <input tabIndex='-1' className='header__nav-dropdown-radio' name='currencyRadio' id='USD'
                               type="radio"/>
                        <label className='header__nav-dropdown-radio-label' htmlFor="USD">USD ( US Dollar
                            )</label>
                    </div>
                    <div className='header__nav-dropdown-radio-holder'>
                        <input tabIndex='-1' className='header__nav-dropdown-radio' name='currencyRadio' id='UAH'
                               type="radio"/>
                        <label className='header__nav-dropdown-radio-label' htmlFor="UAH">UAH ( Ukraine Hryvnia
                            )</label>
                    </div>
                    <div className='header__nav-dropdown-radio-holder'>
                        <input tabIndex='-1' className='header__nav-dropdown-radio' name='currencyRadio' id='EUR'
                               type="radio"/>
                        <label className='header__nav-dropdown-radio-label' htmlFor="EUR">EUR ( Euro )</label>
                    </div>
                    <div className='header__nav-dropdown-radio-holder'>
                        <input tabIndex='-1' className='header__nav-dropdown-radio' name='currencyRadio' id='PLN'
                               type="radio"/>
                        <label className='header__nav-dropdown-radio-label' htmlFor="PLN">PLN ( Polish Zloty
                            )</label>
                    </div>
                    <div className='header__nav-dropdown-radio-holder'>
                        <input tabIndex='-1' className='header__nav-dropdown-radio' name='currencyRadio' id='TRY'
                               type="radio"/>
                        <label className='header__nav-dropdown-radio-label' htmlFor="TRY">TRY ( Turkish Lira
                            )</label>
                    </div>
                    <div className='header__nav-dropdown-radio-holder'>
                        <input tabIndex='-1' className='header__nav-dropdown-radio' name='currencyRadio' id='KRW'
                               type="radio"/>
                        <label className='header__nav-dropdown-radio-label' htmlFor="KRW">KRW ( Korean Won
                            )</label>
                    </div>
                </form>
            </>
        );
    } else if (props.type === 'search') {
        return (
            <>
                <HeaderNavDropdownCollapseComponent>
                    <button tabIndex='-1' className='header__nav-dropdown-collapse-btn'>1</button>
                    <button tabIndex='-1' className='header__nav-dropdown-collapse-btn'>2</button>
                    <button tabIndex='-1' className='header__nav-dropdown-collapse-btn'>3</button>
                    <button tabIndex='-1' className='header__nav-dropdown-collapse-btn'>4</button>
                </HeaderNavDropdownCollapseComponent>
                <form className='header__nav-dropdown-input-form' action="#">
                    <input tabIndex='-1' placeholder='What are you Looking for?' className='header__nav-dropdown-input-in-form' type="text"/>
                    <button tabIndex='-1' className='header__nav-dropdown-btn-in-form' type='submit'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19 19L13 13L19 19ZM15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
                                stroke="#121212" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </form>
                <hr className='header__nav-dropdown-hr'/>
                <LikedProductsContext.Consumer>
                    {
                        value => value.map(item => <HeaderNavDropdownInsprationItemComponent img={item.image} name={item.title} subname={'Blue, S'} price={item.price}/>)
                    }
                </LikedProductsContext.Consumer>
            </>
        );
    } else if (props.type === 'login') {
        return (
            <>
                <h6 className='header__nav-dropdown-login-title'>If you have an account with us, please log in.</h6>
                <form className='header__nav-dropdown-login-form' action="#">
                    <div className='header__nav-dropdown-login-form-div'>
                        <label className='header__nav-dropdown-login-label' htmlFor="email">EMAIL</label>
                        <input tabIndex='-1' className='header__nav-dropdown-login-input' type="email" placeholder='Enter your email'/>
                    </div>
                    <div className='header__nav-dropdown-login-form-div'>
                        <div className='header__nav-dropdown-login-password-top-side'>
                            <label className='header__nav-dropdown-login-label' htmlFor="password">PASSWORD</label>
                            <a tabIndex='-1' className='header__nav-dropdown-login-link' href="#">Lost your password?</a>
                        </div>
                        <input tabIndex='-1' className='header__nav-dropdown-login-input' type="password" placeholder='Your password'/>
                    </div>
                    <button tabIndex='-1' className='header__nav-dropdown-submit-btn'>LOGIN</button>
                </form>
                <div className='header__nav-dropdown-or-holder'>
                    <div className='header__nav-dropdown-or-line'></div>
                    <span className='header__nav-dropdown-or-txt'>or</span>
                    <div className='header__nav-dropdown-or-line'></div>
                </div>
                <ul className='header__nav-dropdown-list-of-ways-to-login'>
                    <li><a tabIndex='-1' href="#"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.3332 20.1053C37.3332 10.4718 29.5751 2.66653 19.9998 2.66653C10.4246 2.66653 2.6665 10.4718 2.6665 20.1053C2.6665 28.8093 9.00505 36.0239 17.2915 37.3332V25.1464H12.8883V20.1053H17.2915V16.2632C17.2915 11.8929 19.8775 9.47892 23.8383 9.47892C25.7352 9.47892 27.7188 9.81926 27.7188 9.81926V14.1086H25.5325C23.3798 14.1086 22.7082 15.4531 22.7082 16.8321V20.1053H27.5154L26.7466 25.1464H22.7082V37.3332C30.9946 36.0239 37.3332 28.8093 37.3332 20.1053Z" fill="#E6E6E6"/></svg></a></li>
                    <li><a tabIndex='-1' href="#"><svg width="40" height="40" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9001 5.65C19.5302 4.92379 20.0106 4.08028 20.3138 3.16789C20.617 2.2555 20.7369 1.29221 20.6668 0.333328C18.7324 0.489473 16.9368 1.39926 15.6668 2.86666C15.0586 3.56995 14.5977 4.38813 14.3114 5.27274C14.0252 6.15734 13.9193 7.0904 14.0001 8.01666C14.9437 8.02452 15.8764 7.81515 16.7261 7.40476C17.5758 6.99437 18.3196 6.39395 18.9001 5.65ZM23.1001 18.05C23.1113 16.7729 23.4477 15.5197 24.0775 14.4087C24.7074 13.2976 25.61 12.3654 26.7001 11.7C26.0121 10.7087 25.1027 9.89139 24.0438 9.31279C22.985 8.73419 21.8059 8.41025 20.6001 8.36666C18.0001 8.1 15.6001 9.88333 14.2168 9.88333C12.8334 9.88333 10.8834 8.4 8.71676 8.43333C7.30031 8.47999 5.92013 8.89296 4.71084 9.63197C3.50155 10.371 2.50444 11.4108 1.81676 12.65C-1.11657 17.75 1.06676 25.3333 4.0001 29.45C5.33343 31.4667 7.0001 33.75 9.2001 33.6667C11.4001 33.5833 12.1168 32.3 14.6668 32.3C17.2168 32.3 18.0001 33.6667 20.1668 33.6167C22.3334 33.5667 23.8668 31.55 25.2668 29.5333C26.2585 28.0692 27.0332 26.4693 27.5668 24.7833C26.2459 24.22 25.119 23.2821 24.3252 22.0855C23.5314 20.8889 23.1055 19.486 23.1001 18.05Z" fill="#E6E6E6"/></svg></a></li>
                    <li><a tabIndex='-1' href="#"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.75 17.5L35.5859 16.8046H20.4688V23.2031H29.5C28.5625 27.6562 24.2109 30 20.6562 30C18.0703 30 15.3438 28.914 13.5391 27.164C11.6875 25.3671 10.5078 22.7187 10.5078 19.9921C10.5078 17.2968 11.7188 14.6015 13.4844 12.8281C15.2422 11.0625 17.9062 10.0625 20.5547 10.0625C23.5859 10.0625 25.7578 11.6718 26.5703 12.4062L31.1172 7.88277C29.7812 6.71089 26.1172 3.75777 20.4062 3.75777C16 3.75777 11.7734 5.44527 8.6875 8.52339C5.64062 11.5546 4.0625 15.9375 4.0625 20C4.0625 24.0625 5.55469 28.2343 8.50781 31.289C11.6641 34.5468 16.1328 36.25 20.7344 36.25C24.9219 36.25 28.8906 34.6093 31.7188 31.6328C34.5 28.7031 35.9375 24.6484 35.9375 20.3984C35.9375 18.6093 35.7578 17.5468 35.75 17.5Z" fill="#E6E6E6"/></svg></a></li>
                </ul>
                <div className='header__nav-dropdown-bottom-btns-holder'>
                    <a tabIndex='-1' href="#"><button tabIndex='-1' className='header__nav-dropdown-bgwhite-btn'>New Customer?</button></a>
                    <a tabIndex='-1' href="#"><button tabIndex='-1' className='header__nav-dropdown-bgrey-btn'>Create your account</button></a>
                </div>
            </>
        );
    } else if (props.type === 'cart') {
        return (
            <>
                <div className='header__nav-dropdown-cart-list-holder'>
                    <ul className='header__nav-dropdown-cart-list'>
                        <CardProductsContext.Consumer>
                            {
                                value => value.map(item => <HeaderNavDropdownCartLiComponent img={item.image} name={item.title} subname={'Blue, S'} price={item.price}/>)
                            }
                        </CardProductsContext.Consumer>
                    </ul>
                </div>
                <div className='header__nav-dropdown-cart-total-holder'>
                    <h6 className='header__nav-dropdown-cart-total-txt'>Total</h6>
                    <h6 className='header__nav-dropdown-cart-total-number'>$433.99</h6>
                </div>
                <div className='header__nav-dropdown-bottom-btns-holder'>
                    <a tabIndex='-1' href="#"><button tabIndex='-1' className='header__nav-dropdown-submit-btn'>Check Out</button></a>
                    <a tabIndex='-1' href="#"><button tabIndex='-1' className='header__nav-dropdown-bgrey-btn'>View Cart</button></a>
                </div>
            </>
        );
    }
}