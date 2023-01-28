import React from 'react'
import { UserContext } from "../../UserContext.js"
import { useContext, useEffect } from 'react'
import axios from "axios"
import * as style from "./style.js"
import blackBackArrow from "./assets/backArrow.png"
import confirmed from "./assets/confirmed.png"

export default function PurchaseSucessful() {
    return (
        <style.Body>
            <style.Container>

                <style.BackDiv>
                    <style.Img src={blackBackArrow} alt="Voltar" />
                </style.BackDiv>
                
                <style.Container>
                    <style.Title>Compra finalizada</style.Title>

                    <style.SucessImg src={confirmed} alt="Voltar" />

                    <style.Title>Com sucesso !</style.Title>

                    <style.Text>
                        Você será notificado sobre o andamento da entrega da sua mercadoria atráves do seu e-mail.
                    </style.Text>
                </style.Container>

            </style.Container>

            <style.backToShopping>
                <p>Continuar as compras</p>
            </style.backToShopping>

        </style.Body>
    )
}