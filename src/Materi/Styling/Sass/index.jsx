import React from "react";
import './index.scss';

export default class Sass extends React.Component {

    render() {
        return (
            <div>
                <button className="btn btn-danger">Go Bismillah!!</button>
            </div>
        )
    }
}

// Terdapat problem jikA kebanyakan menggunakan Sass YAITU Global Naming Scope tapi dapat diatasi dengan INLINE STYLE