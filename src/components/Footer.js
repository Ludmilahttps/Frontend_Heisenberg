import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

function Footer() {

    return (
        <Foot  data-test="menu">
            <Link to="/">
                <ion-icon name="home-outline"></ion-icon>
            </Link>
            <Circle>
                <Link to="/cart">
                    <ion-icon name="cart-outline"></ion-icon>
                </Link>
            </Circle>
            <Link to="/profile">
                <ion-icon name="person-outline"></ion-icon>
            </Link>
        </Foot>
    )
}

export default Footer

export const Foot = styled.footer
    `
    background-color: #073C47;
    filter: drop-shadow(-5px -15px 50px rgba(0, 0, 0, 0.35));
    position: fixed;
    width: 100%;
    height: 80px;
    bottom: 0; 
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    > a {
        text-decoration: none;
        color: #52B6FF;
        > ion-icon {
            width: 35px;
            height: 35px;
            color: #FFF;
        }
    }
`

const Circle = styled.div
`
    background-color: #3A8891;
    filter: drop-shadow(-4px -4px 20px rgba(0, 0, 0, 0.35));
    border-radius: 50%;
    position: fixed;
    width: 91px;
    height: 91px;
    bottom: 20px; 
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    > a 
    {
        > ion-icon {
            width: 35px;
            height: 35px;
            color: #FFF;
        }
    }
    
`