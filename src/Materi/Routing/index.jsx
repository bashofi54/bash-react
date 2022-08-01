import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Service from "./Service";
import Client from "./Client";
import Contact from "./Contact";
import Post from "./Post";

const Routing = () => {
    return (
        <div>
            <Router>
                <Navigation />
                <Switch>     
                {/* Beberapa cara PASSING komponen di Route */}

                    {/* Sebagai child component <Route> */}
                    <Route exact path="/" children={() => <Home />} /> 
                    <Route path="/service" children={() => <Service />} />

                     {/* Sebagai props children pada <Route> */}
                    <Route path="/client">
                        <Client />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>

                    {/* Dynamic Routing */}
                    <Route path="/post/:id" children={() => <Post />} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routing;