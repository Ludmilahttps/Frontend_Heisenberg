import React from 'react'
import { HistoricScreen, Feed, Transfers, Balance } from './style'
import Footer from "../../components/Footer"
import { UserContext } from "../../UserContext.js"
import { useContext, useEffect } from 'react'
import axios from "axios"

function Home() {
    return (
        <HistoricScreen>
           <Footer />
        </HistoricScreen>
    )
}

export default Home