import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

const Service = () => {
    const match = useRouteMatch();
    return (
        <div className="main">
            <h2>Service Page</h2>
            <ul>
                <li>satu</li>
                <li>dua</li>
                <li><Link to={`${match.url}/computer`}>Computer</Link></li>
                <li><Link to="/service/smartphone">Smartphone</Link></li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui vel voluptatem blanditiis reprehenderit facere, nam quod perspiciatis mollitia accusamus sunt laudantium provident officiis, aperiam enim quibusdam distinctio, repellendus expedita minus?</p>
            <hr />
            <Switch>
                <Route path={`${match.url}/computer`}>
                    Lenovo, MacBook, Acer, Asus, dll
                </Route>
                <Route path="/service/smartphone">
                    Blackberry, Iphone, Nokia, Asus, dll
                </Route>
            </Switch>
        </div>
    )
}

export default Service;