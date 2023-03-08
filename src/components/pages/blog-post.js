// Codes By Mahdi Tasha
// Exporting Blog Post Functional Component As Default
export default function PageBlogPostComponent(props) {
    // returning JSX
    return (
        <li>
            <img src={props.img} alt={props.name}/>
            <div>
                <div>
                    <h6>{props.name}</h6>
                    <p>{props.pargraph}</p>
                </div>
                <div>
                    <h6>{props.date}</h6>
                    <a href="#">Read More</a>
                </div>
            </div>
        </li>
    );
}
