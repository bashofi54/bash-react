import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FunctionalComponent from "./Pembahasan/FunctionalComponent";

class komponen extends React.Component {

    render() {
        return (
            <div>
                <ClassComponent nama="Bashofi :)" />
                <FunctionalComponent basmalah="Bismillah Bisaa!!" />
            </div>
        )
    }
}

export default komponen;