// Codes By Mahdi Tasha
// Importing Part
import PageComponent from "../../components/pages/page";
import PageSectionsComponent from "../../components/pages/page-sections";
import PageProductsListComponent from "../../components/pages/page-products-list";
import PageCategoriesTopSideComponent from "../../components/pages/page-categories-top-side";
import PageCategoriesFilterComponent from "../../components/pages/page-categories-filter-holder";

// Exporting Men Categories Page As Functional Component
export default function MenPage() {
    // Returning JSX
    return (
        <PageComponent pageName={'men-cat'}>
            <PageSectionsComponent pageName={'men-cat'} sectionNumber={'first'}>
                <PageCategoriesTopSideComponent pageName={'men'}/>
                <PageCategoriesFilterComponent />
                <PageProductsListComponent fetchType={'men'}/>
            </PageSectionsComponent>
        </PageComponent>
    );
}
