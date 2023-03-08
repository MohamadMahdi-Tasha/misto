// Codes By Mahdi Tasha
// Importing Part

// Exporting Bottom Side Of Footer Functional Component
export default function MiddleSideOfFooterComponent() {
    // Returning JSX
    return (
        <div className='footer__middle-side'>
            <ul className='footer__list'>
                <li className='footer__list-heading'>Categories</li>
                <li className='footer__list-item'><a href="#">Men</a></li>
                <li className='footer__list-item'><a href="#">Women</a></li>
                <li className='footer__list-item'><a href="#">Accessories</a></li>
                <li className='footer__list-item'><a href="#">Beauty</a></li>
            </ul>
            <ul className='footer__list'>
                <li className='footer__list-heading'>Infomation</li>
                <li className='footer__list-item'><a href="#">About Us</a></li>
                <li className='footer__list-item'><a href="#">Contact Us</a></li>
                <li className='footer__list-item'><a href="#">Blog</a></li>
                <li className='footer__list-item'><a href="#">FAQs</a></li>
            </ul>
            <ul className='footer__list'>
                <li className='footer__list-heading'>Useful links</li>
                <ul className='footer__list-item'>Terms & Conditions</ul>
                <ul className='footer__list-item'>Returns & Exchanges</ul>
                <ul className='footer__list-item'>Shipping & Delivery</ul>
                <ul className='footer__list-item'>Privacy Policy</ul>
            </ul>
            <ul className='footer__list'>
                <li className='footer__list-heading'>CONTACT US</li>
                <li className='footer__list-item'>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2428 11.4928L8.0605 14.675C7.92133 14.8143 7.75608 14.9248 7.57417 15.0002C7.39227 15.0756 7.19729 15.1145 7.00038 15.1145C6.80347 15.1145 6.60849 15.0756 6.42658 15.0002C6.24468 14.9248 6.07942 14.8143 5.94025 14.675L2.75725 11.4928C1.91817 10.6536 1.34675 9.58455 1.11527 8.42067C0.883782 7.25679 1.00262 6.05041 1.45676 4.95407C1.91089 3.85773 2.67993 2.92068 3.66661 2.2614C4.6533 1.60213 5.81333 1.25024 7 1.25024C8.18668 1.25024 9.3467 1.60213 10.3334 2.2614C11.3201 2.92068 12.0891 3.85773 12.5433 4.95407C12.9974 6.05041 13.1162 7.25679 12.8847 8.42067C12.6533 9.58455 12.0818 10.6536 11.2428 11.4928V11.4928Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.25 7.25C9.25 7.84674 9.01295 8.41903 8.59099 8.84099C8.16903 9.26295 7.59674 9.5 7 9.5C6.40326 9.5 5.83097 9.26295 5.40901 8.84099C4.98705 8.41903 4.75 7.84674 4.75 7.25C4.75 6.65326 4.98705 6.08097 5.40901 5.65901C5.83097 5.23705 6.40326 5 7 5C7.59674 5 8.16903 5.23705 8.59099 5.65901C9.01295 6.08097 9.25 6.65326 9.25 7.25V7.25Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Iran,Tehran,Khayabn-e-Taleghani
                </li>
                <li className='footer__list-item'>
                    <a href="tel:+381234567">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.25 2.75C1.25 2.35218 1.40804 1.97064 1.68934 1.68934C1.97064 1.40804 2.35218 1.25 2.75 1.25H5.21C5.36735 1.25012 5.52067 1.29972 5.64827 1.39179C5.77587 1.48385 5.87128 1.61372 5.921 1.763L7.0445 5.13275C7.10143 5.304 7.09469 5.49004 7.02554 5.65673C6.95638 5.82342 6.82944 5.95959 6.668 6.04025L4.97525 6.88775C5.80499 8.72415 7.27585 10.195 9.11225 11.0248L9.95975 9.332C10.0404 9.17056 10.1766 9.04362 10.3433 8.97446C10.51 8.90531 10.696 8.89857 10.8672 8.9555L14.237 10.079C14.3864 10.1288 14.5164 10.2243 14.6084 10.352C14.7005 10.4798 14.75 10.6333 14.75 10.7907V13.25C14.75 13.6478 14.592 14.0294 14.3107 14.3107C14.0294 14.592 13.6478 14.75 13.25 14.75H12.5C6.287 14.75 1.25 9.713 1.25 3.5V2.75Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        +38 (050) 12 34 567
                    </a>
                </li>
                <li className='footer__list-item'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5V8L10.25 10.25M14.75 8C14.75 8.88642 14.5754 9.76417 14.2362 10.5831C13.897 11.4021 13.3998 12.1462 12.773 12.773C12.1462 13.3998 11.4021 13.897 10.5831 14.2362C9.76417 14.5754 8.88642 14.75 8 14.75C7.11358 14.75 6.23583 14.5754 5.41689 14.2362C4.59794 13.897 3.85382 13.3998 3.22703 12.773C2.60023 12.1462 2.10303 11.4021 1.76381 10.5831C1.42459 9.76417 1.25 8.88642 1.25 8C1.25 6.20979 1.96116 4.4929 3.22703 3.22703C4.4929 1.96116 6.20979 1.25 8 1.25C9.79021 1.25 11.5071 1.96116 12.773 3.22703C14.0388 4.4929 14.75 6.20979 14.75 8Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    All week 24/7
                </li>
                <li className='footer__list-item'>
                    <a href="mailto:imwhdiiii@gmail.com">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.25 3L7.1675 6.945C7.414 7.10946 7.70368 7.19722 8 7.19722C8.29632 7.19722 8.586 7.10946 8.8325 6.945L14.75 3M2.75 11.25H13.25C13.6478 11.25 14.0294 11.092 14.3107 10.8107C14.592 10.5294 14.75 10.1478 14.75 9.75V2.25C14.75 1.85218 14.592 1.47064 14.3107 1.18934C14.0294 0.908035 13.6478 0.75 13.25 0.75H2.75C2.35218 0.75 1.97064 0.908035 1.68934 1.18934C1.40804 1.47064 1.25 1.85218 1.25 2.25V9.75C1.25 10.1478 1.40804 10.5294 1.68934 10.8107C1.97064 11.092 2.35218 11.25 2.75 11.25Z" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        imwhdiiii@gmail.com
                    </a>
                </li>
            </ul>
        </div>
    );
}