import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="main">
            <h2>Home Page</h2>
            <ul>
                <li><Link to="/post/1">satu</Link></li>
                <li><Link to="/post/1">dua</Link></li>
                <li><Link to="/post/1">tiga</Link></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui vel voluptatem blanditiis reprehenderit facere, nam quod perspiciatis mollitia accusamus sunt laudantium provident officiis, aperiam enim quibusdam distinctio, repellendus expedita minus?</p>
        </div>
    )
}

export default Home;