import React from "react"
import { Switch, Route } from "react-router-dom"

import "./App.css"

import HomePage from "./pages/homepage/homepage.comp"
import ShopPage from "./pages/shop/shop.comp"
import Header from "./components/header/header-comp"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
