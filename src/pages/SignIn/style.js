import styled from "styled-components"

export const Form = styled.div
`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-context: center;
margin-top: 25%;
flex-direction: column;
> img {
    width: 147px;
    height: 50px;
    margin-bottom: 25px;
}
> input {
    width: 303px;
    height: 46px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 15px;
    margin: 7.5px;
    cursor: pointer;
    padding-left: 15px;
}
> button {
    width: 303px;
    height: 45px;
    box-sizing: border-box;
    background: #073c47;
    border-radius: 10px;
    border: none;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #FFFFFF;
    margin: 3px;
    cursor: pointer;
    justify-context: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
}
> a {
    width: 303px;
    height: 45px;
    box-sizing: border-box;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    text-decoration-line: none;
    color: #fff;
    margin: 22px;
    cursor: pointer;
}
> p {
    font-family: 'Six Caps';
    font-weight: 400;
    font-size: 100px;
    line-height: 132px;
    color: #FFEFD6;
}
`