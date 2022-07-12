import React from "react";

class ClassComponent extends React.Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         value: 0
    //     }

    //     this.handPlus = this.handPlus.bind(this);  
    //     this.handMinus = this.handMinus.bind(this); --TIDAK PERLU DI BINDING DI GANTI DENGAN FUNCTION ARROW--

    // } --TIDAK PERLU CONSTRUCTOR DENGAN CARA DIBAWAH--

    state = {
        value: 0
    }

    handPlus = () => {
        this.setState({value: this.state.value + 1});
    }

    handMinus = () => {
        if(this.state.value > 0) {
            this.setState({value: this.state.value - 1});
        }
    }

    render() {
        return(
            <div>
                <h1>Welcome to the new WORLD</h1>
                <h2>Hello {this.props.nama}</h2>
                <button onClick={this.handMinus}>-</button>
                <span> {' '} {this.state.value} {' '} </span>
                <button onClick={this.handPlus} >+</button>
                <h3>class</h3>
            </div>
        )
    }
}

export default ClassComponent;