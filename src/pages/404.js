// Codes By Mahdi Tasha
// Importing Part
import PageComponent from "../components/pages/page";
import PageSectionsComponent from "../components/pages/page-sections";
import { Link } from "react-router-dom";

// Exporting 404 Page Functional Component As Default
export default function Page404(){
    // Returning JSX
    return(
        <PageComponent pageName={'404'}>
            <PageSectionsComponent pageName={'404'} sectionNumber={'first'}>
                <h1 className='page--404__txt'>Sorry <br/> But Nothing Find With This Title</h1>
                <div className='page--404__btn-holder'>
                    <Link to={'/'}><button className='page--404__btn'>To Home</button></Link>
                </div>
            </PageSectionsComponent>
        </PageComponent>
    );
}