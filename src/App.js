import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import GlobalStyle from './GlobalStyle'

import { UserContext } from './UserContext'
import SignIn from "./pages/SignIn/SignIn"
import SignUp from "./pages/SignUp/SignUp"
import Home from "./pages/Home/Home"
import Payment from './pages/Payment/payment'
import Adress from './pages/Adress/adress'
import PurchaseSucessful from './pages/PurchaseSucessful/purchaseSucessful'
import Cart from './pages/CartPage/Cart'

function App() {

  const [info, setInfo] = useState({})
  const [historic, setHistoric] = useState([])

  return (
    <UserContext.Provider value={{ info, setInfo, historic, setHistoric }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={< Home  />} />
          <Route path="/signin" element={< SignIn />} />
          <Route path="/signup" element={< SignUp />} />
          <Route path="/home" element={< Home />} />
          <Route path="/cart" element={< Cart />} />
          <Route path="/payment" element={< Payment />} />
          <Route path="/adress" element={< Adress />} />
          <Route path="/sucess" element={< PurchaseSucessful />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
