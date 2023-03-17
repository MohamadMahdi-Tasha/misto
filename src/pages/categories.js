// Codes By Mahdi Tasha
// Importing Part
import React, { useState } from 'react';
import {useParams} from "react-router-dom";
import PageComponent from "../components/pages/page";
import PageSectionsComponent from "../components/pages/page-sections";
import PageProductsListComponent from "../components/pages/page-products-list";
import PageCategoriesTopSideComponent from "../components/pages/page-categories-top-side";
import PageCategoriesFilterComponent from "../components/pages/page-categories-filter-holder";
import AlertComponent from "../components/alert";

// Exporting Men Categories Page As Functional Component
export default function CategoriesPage() {
    // Using 'useParams' Custom Hook To Get Parameters Of URL
    const { type } = useParams();

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
        <PageComponent pageName={`${type}-cat`}>
            <AlertComponent
                onClickOfCloseBtn={() => setShareBtnClicked(false)}
                isOpenedProp={isShareBtnClicked}
                title='The Url Is Copied Tou Your Clipboard!'>
                The Url Is Copied To Your Clipboard <br/>
                You Can Now Share This With Whoever You Want :)
            </AlertComponent>
            <PageSectionsComponent pageName={`${type}-cat`} sectionNumber={'first'}>
                <PageCategoriesTopSideComponent onClickOfShareBtn={handleClickOfShareBtn} pageName={type}/>
                <PageCategoriesFilterComponent
                    refOfGridColBtn={refrenceOfColGridBtn}
                    refOfGridRowBtn={refrenceOfRowGridBtn}
                    onClickOfGridColBtn={handleClickOfColGridBtn}
                    onClickOfGridRowBtn={handleClickOfRowGridBtn}
                />
                <PageProductsListComponent gridType={gridType} fetchType={type}/>
            </PageSectionsComponent>
        </PageComponent>
    );
}
