import styled from "styled-components"

export const Body = styled.div`
width: 70vw;
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Container = styled.div`
width: 255px;
`

export const Title = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
color: #000000;
margin: 10px 0px;
`

export const PayBox = styled.div`
display: flex;
justify-content:  space-between;
align-items: center;
margin: 5px 0px;
`

export const PayMethodCircle = styled.div`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
border: 1px solid #000000;
border-radius: 5px;
position: relative;
`

export const Img = styled.img`
width: 20px;
height: 20px;
`

export const PixVertical = styled.img`
width: 13px;
height: 20px;
position: absolute;
top: 5px;
left: 8px;
`

export const PixHorizontal = styled.img`
width: 20px;
height: 9px;
position: absolute;
top: 10px;
left: 5px;
`

export const PayMethod = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 24px;
text-align: center;
text-transform: uppercase;
color: #000000;
`

export const ChooseCircle = styled.div`
width: 20px;
height: 20px;
border: 1px solid #000000;
border-radius: 50%;
`

export const Input = styled.input`
width: 255px;
height: 37px;
background-color: #EBEBEB;
border-radius: 5px;
border: 0;
margin: 10px 0px;
padding: 0px 5px;
::placeholder{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #797979;
}
`

export const SmallInputsBox = styled.div`
display: flex;
justify-content: space-between;
`

export const DateInput = styled.input`
width: 155px;
height: 37px;
background-color: #EBEBEB;
border-radius: 5px;
border: 0;
padding: 0px 5px;
margin: 10px 0px;
::placeholder{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #797979;
}
`

export const CCVInput = styled.input`
width: 93px;
height: 37px;
background-color: #EBEBEB;
border-radius: 5px;
border: 0;
padding: 0px 5px;
margin: 10px 0px;
::placeholder{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #797979;
}
`

export const RememberBox = styled.div`
display: flex;
padding: 0px  5px;

button{
border: 1px solid #000000;
border-radius: 5px;
width: 20px;
height: 20px;
}

P{
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
color: #000000;
margin: 0px 10px;
}
`

export const MakePayment = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 15px 0px;
padding: 12px 0px;
width: 300px;
height: 50px;
background-color: #073C47;
border-radius: 8px;
p{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;
color: #FFEFD6;
flex: none;
order: 0;
flex-grow: 0;
}
`