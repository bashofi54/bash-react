import React from "react";
import Bootstrap from "./Bootstrap";
import Inline from "./Inline";
import Module from "./Module";
//import Plain from "./Plain";
import Sass from "./Sass";
import Style from "./Style";

export default class Styling extends React.Component {

    render() {
        return(
            <div>
                {/* <Plain /> */}
                <Sass />
                <Inline />
                <Module />
                <Style />
                <Bootstrap />
            </div>
        )
    }
}