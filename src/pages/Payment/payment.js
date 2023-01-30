import React from 'react'
import { UserContext } from "../../UserContext.js"
import { useContext, useEffect } from 'react'
import axios from "axios"
import * as style from "./style.js"
import blackBackArrow from "../../assets/blackBackArrow.png"
import masterCard from "../../assets/masterCard.png"
import barCode from "../../assets/barCode.png"
import pixVertical from "../../assets/pixVertical.png"
import pixHorizontal from "../../assets/pixHorizontal.png"


export default function Payment() {
    return (
        <style.Body>
            <style.Container>
                <style.Img src={blackBackArrow} alt="Voltar" />

                <style.Title>Forma de Pagamento</style.Title>

                <style.PayBox>
                    <style.PayMethodCircle>
                        <style.Img src={masterCard} />
                    </style.PayMethodCircle>
                    <style.PayMethod>Cartão de crédito</style.PayMethod>
                    <style.ChooseCircle></style.ChooseCircle>
                </style.PayBox>

                <style.PayBox>
                    <style.PayMethodCircle>
                        <style.Img src={barCode} />
                    </style.PayMethodCircle>
                    <style.PayMethod>Boleto</style.PayMethod>
                    <style.ChooseCircle></style.ChooseCircle>
                </style.PayBox>

                <style.PayBox>
                    <style.PayMethodCircle>
                        <style.PixVertical src={pixVertical} />
                        <style.PixHorizontal src={pixHorizontal} />
                    </style.PayMethodCircle>
                    <style.PayMethod>Pix</style.PayMethod>
                    <style.ChooseCircle></style.ChooseCircle>
                </style.PayBox>


                <style.Input placeholder='Número do cartão de crédito' />

                <style.SmallInputsBox>
                    <style.DateInput placeholder='Validade(mm/aa)' />
                    <style.CCVInput placeholder='CCV' />
                </style.SmallInputsBox>

                <style.Input placeholder='Nome do titular' />
                <style.Input placeholder='5x - R$ 1.110,16' />

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