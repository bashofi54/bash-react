import React from "react";
import styled from "styled-components";
import Counter from '../Counter';

const imgProduct = 'https://source.unplash.com/collection/190727/400x300';

const CardCountainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
`;

const Image = styled.img`
    width: 100%;
`;

const Heading = styled.h1`
    font-size: 18px;
`;

const Price = styled.p`
    color: grey;
    font-size: 22px;
`;

const Description = styled.p`
    font-size: small;
`;

export default class Product extends React.Component {

    handValue = (value) => {
        this.props.receiveValue(value);
    } 

    render() {
        return (
            <div>
                <CardCountainer>
                    <Image src={imgProduct} alt="img" />
                    <Heading>Title card</Heading>
                    <Price>$19.99</Price>
                    <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita obcaecati aut! Et harum quas, assumenda natus perspiciatis beatae iste enim adipisci eveniet mollitia similique voluptas expedita autem, ex illo.</Description>
                    <Counter receiveValue={this.handValue} />
                </CardCountainer>
            </div>
        )
    }
}