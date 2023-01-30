import React from 'react'
import { UserContext } from "../../UserContext.js"
import { useContext, useEffect } from 'react'
import axios from "axios"
import * as style from "./style.js"
import blackBackArrow from "../../assets/blackBackArrow.png"

export default function Adress() {
    return (
        <style.Body>
            <style.Container>

                <style.Img src={blackBackArrow} alt="Voltar" />

                <style.Title>Endereço</style.Title>

                <style.Input placeholder='Nome e Sobrenome*' />
                <style.Input placeholder='CEP*' />
                <style.Input placeholder='Rua*' />

                <style.SmallInputsBox>
                    <style.SmallInput placeholder='Número' />
                    <style.SmallInput placeholder='Complemento' />
                </style.SmallInputsBox>

                <style.Input placeholder='Bairro*' />

                <style.SmallInputsBox>
                    <style.SmallInput placeholder='Cidade*' />
                    <style.SmallInput placeholder='Estado*' />
                </style.SmallInputsBox>

                <style.Input placeholder='Celular*' />

                <style.RememberBox>
                    <button></button>
                    <p>Lembrar-me</p>
                </style.RememberBox>

            </style.Container>

            <style.MakePayment>
                <p>Finalizar pagamento</p>
            </style.MakePayment>

        </style.Body>
    )
}
