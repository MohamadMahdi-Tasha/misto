// Codes By Mahdi Tasha
// Importing Part
import AmericanExpressLogo from '../../assets/img/footer/img-american-express.png';
import DiscoverLogo from '../../assets/img/footer/img-discover.png';
import MasterCardLogo from '../../assets/img/footer/img-mastercard.png';
import VisaLogo from '../../assets/img/footer/img-visa.png';
import PaypalLogo from '../../assets/img/footer/img-paypal.png';
import AESLogo from '../../assets/img/footer/img-AES256.png';
import StripeLogo from '../../assets/img/footer/img-stripe.png';

// Exporting Bottom Side Of Footer Functional Component
export default function BottomSideOfFooterComponent() {
    // Returning JSX
    return (
        <div className='footer__bottom-side'>
            <h6 className='footer__bottom-side-title'>Copyright © 2032 all rights reserved</h6>
            <ul className='footer__logos-list'>
                <li><img className='footer__logo' src={AmericanExpressLogo} alt="AmericanExpress Logo"/></li>
                <li><img className='footer__logo' src={DiscoverLogo} alt="Discover Logo"/></li>
                <li><img className='footer__logo' src={MasterCardLogo} alt="MasterCard Logo"/></li>
                <li><img className='footer__logo' src={VisaLogo} alt="Visa Logo"/></li>
                <li><img className='footer__logo' src={PaypalLogo} alt="Paypal Logo"/></li>
                <li><img className='footer__logo' src={AESLogo} alt="AES Logo"/></li>
                <li><img className='footer__logo' src={StripeLogo} alt="Stripe Logo"/></li>
            </ul>
            <a className='footer__developer-name' href="https://www.github.com/MohamadMahdi-Tasha">Coded by <span>Mohamad Mahdi Tasha</span></a>
        </div>
    );
}