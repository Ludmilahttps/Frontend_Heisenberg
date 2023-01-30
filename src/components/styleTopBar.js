import styled from "styled-components"


export const TopBar = styled.div`
width: 100vw;
height: 88px;
background-color: #3E6063;
display: flex;
justify-content: space-around;
align-items: center;
margin: 0px  0px 10px 0px;
`

export const Circle = styled.div`
width: 36px;
height: 36px;
background-color: #073C47;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
`

export const UserIcon = styled.img`
width: 24px;
height: 24px;
color: white;
`

export const Login = styled.div`
width: 215px;
height: 72px;
display: flex;
flex-direction: column;
justify-content: space-around;
p{
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
color: #FFFFFF;
}
`

export const LoginTitle = styled.p`
font-size: 12px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
line-height: 12px;
color: #FFFFFF;
`

export const Buttons = styled.div`
display: flex;
justify-content: space-between;
`

export const Button = styled.button`
width: 100px;
height: 25px;
background-color: #E0F6C9;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
padding: 3px 0px;
p{
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 12px;
color: #000000;
}
`

export const SignUp = styled(Button)`
background-color: white;
`