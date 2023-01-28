import styled from "styled-components"

export const Body = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #073C47;
border-radius: 20px;
`

export const Container = styled.div`
width: 255px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Title = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #FFFFFF;
margin: 15px 0px;
`

export const BackDiv = styled.div`
width: 255px;
display: flex;
justify-content: start;
margin: 30px  0px;
`

export const Img = styled.img`
width: 40px;
height: 40px;
`

export const SucessImg = styled.img`
width: 172px;
height: 172px;
`

export const Text = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
text-transform: lowercase;
color: #FFFFFF;
`


export const backToShopping = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 0px;
margin: 30px 0px;
gap: 8px;
width: 300px;
height: 49px;
left: 30px;
top: 580px;
background: #E0F6C9;
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
color: #000000;
}
`