// Codes By Mahdi Tasha
// Importing Part
import React, {useEffect, useState} from 'react';
import PageComponent from "../../components/pages/page";
import PageSectionsComponent from "../../components/pages/page-sections";
import PageProductsListComponent from "../../components/pages/page-products-list";
import PageCategoriesTopSideComponent from "../../components/pages/page-categories-top-side";
import PageCategoriesFilterComponent from "../../components/pages/page-categories-filter-holder";
import AlertComponent from "../../components/alert";

// Exporting Men Categories Page As Functional Component
export default function MenPage() {
    // Setting States
    const [gridType, setGridType] = useState('row');
    const [isShareBtnClicked, setShareBtnClicked] = useState(false);

    // Creating Refs
    const refrenceOfColGridBtn = React.createRef();
    const refrenceOfRowGridBtn = React.createRef();

    // Handling Clicks Of Grid Type Buttons
    function handleClickOfColGridBtn() {
        setGridType('col');
        refrenceOfColGridBtn.current.setAttribute('data-selected', 'true');
        refrenceOfRowGridBtn.current.setAttribute('data-selected', 'false');
    }

    function handleClickOfRowGridBtn() {
        setGridType('row');
        refrenceOfColGridBtn.current.setAttribute('data-selected', 'false');
        refrenceOfRowGridBtn.current.setAttribute('data-selected', 'true');
    }

    function handleClickOfShareBtn() {
        setShareBtnClicked(true);
        navigator.clipboard.writeText(document.documentURI)
    }

    // Returning JSX
    return (
        <PageComponent pageName={'men-cat'}>
            <AlertComponent
                onClickOfCloseBtn={() => setShareBtnClicked(false)}
                isOpenedProp={isShareBtnClicked}
                title='Payment successful'>
                Your payment has been successfully submitted. <br/>
                We’ve sent you an email with all of the details of your order.
            </AlertComponent>
            <PageSectionsComponent pageName={'men-cat'} sectionNumber={'first'}>
                <PageCategoriesTopSideComponent onClickOfShareBtn={handleClickOfShareBtn} pageName={'men'}/>
                <PageCategoriesFilterComponent
                    refOfGridColBtn={refrenceOfColGridBtn}
                    refOfGridRowBtn={refrenceOfRowGridBtn}
                    onClickOfGridColBtn={handleClickOfColGridBtn}
                    onClickOfGridRowBtn={handleClickOfRowGridBtn}
                />
                <PageProductsListComponent gridType={gridType} fetchType={'men'}/>
            </PageSectionsComponent>
        </PageComponent>
    );
}
