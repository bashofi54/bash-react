import React from "react";
import styled from "styled-components";

const Button = styled.button`
    border: 2px solid black;
    background-color: white;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    border-color: #2196;
    color: dodgerblue;
    border-radius: 5px;

    &:hover {
        background: #2196;
        color: white;
    }
`;

export default class Style extends React.Component {

    render() {
        return (
            <div>
                <Button>Go Bismillah!!</Button>
            </div>
        )
    }
}