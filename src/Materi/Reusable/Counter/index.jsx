import React from "react";
import styled from "styled-components";

const Qty = styled.p`
    font-size: 22px;
    width: 600px;
`;

const Button = styled.button`
    border: 5px;
    outline: 0;
    padding: 12px;
    color: darkslategrey;
    background-color: lightgreen;
    text-align: center;
    cursor: pointer;
    font-size: 18px;

    &hover {
        opacity: 0.7;
    }
`;

export default class Counter extends React.Component {
    state = {
        value: 0
    }

    handMin = () => {
        this.setState({value: this.state.value - 1}, () => this.props.receiveValue(this.state.value));
        
    }

    handPlus = () => {
        this.setState({value: this.state.value + 1}, () => this.props.receiveValue(this.state.value));
    }

    render() {
        return (
            <div style={{display: 'flex'}}>
                <Button onClick={this.handMin}>-</Button>
                <Qty>{this.state.value}</Qty>
                <Button onClick={this.handPlus}>+</Button>
            </div>
        )
    }
}