// Codes By Mahdi Tasha
// Exporting Alert Functional Component
export default function AlertComponent({title, children}) {
    // returning JSX
    return(
        <div className='alert'>
            <h6 className='alert__title'>{title}</h6>
            <p className='alert__txt'>{children}</p>
            <button className='alert__close-btn'>Got It, Thanks!</button>
        </div>
    );
}