// Codes By Mahdi Tasha
// Importing Part
import AdvantageComponent from "../components/advantage";

// Exporting Home Page Functional Component As Default
export default function HomePage() {
    // Returning JSX
    return (
        <div className='page page--home'>
            <div className='page__inner'>
                <section className='page--home__first-sect'>
                    <main className='page--home__first-sect__main'>
                        <div className='page--home__first-sect__banner'>
                            <div className='page--home__first-sect__banner__inner-div'>
                                <a className='page--home__first-sect__banner__inner-link' href='#'>
                                    <h6 className='page--home__first-sect__banner__inner-link__title'>Banner</h6>
                                    <h4 className='page--home__first-sect__banner__inner-link__subtitle'>your Title text </h4>
                                </a>
                            </div>
                        </div>
                        <div className='page--home__first-sect__women'><a className='page--home__first-sect__women__inner-link' href="#">Women</a></div>
                        <div className='page--home__first-sect__men'><a className='page--home__first-sect__men__inner-link' href="#">Men</a></div>
                        <div className='page--home__first-sect__accessories'><a className='page--home__first-sect__accessories__inner-link' href="#">Accsessories</a></div>
                    </main>
                    <AdvantageComponent />
                </section>
            </div>
        </div>
    );
}