import React from "react";
import Bar from "./Bar";
import Hello from "./Hello";
import Product from "./Product";

export default class Reusable extends React.Component {

    state = {
        value: 0
    }

    handValue = (data) => {
        this.setState({
            value: data
        })
    }

    render() {
        return (
            <div>
                <Hello base="Bisoooo.." />
                <Hello base="Kudu BISOO" /> reusableComponent
                <Hello base="Mesti Bisoo" />
                <Bar value={this.state.value} />
                <Product receiveValue={this.handValue} />
            </div>
        )
    }
}