// Codes By Mahdi Tasha
// Importing Part
import React from "react";
// Exporting Alert Functional Component
export default function AlertComponent({title, children, isOpenedProp, onClickOfCloseBtn}) {
    // returning JSX
    return(
        <div className='alert' data-opened={isOpenedProp}>
            <h6 className='alert__title'>{title}</h6>
            <p className='alert__txt'>{children}</p>
            <button tabIndex='-1' className='alert__close-btn' onClick={onClickOfCloseBtn}>Got It, Thanks!</button>
        </div>
    );
}