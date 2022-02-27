import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemlistContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.js/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemlistContainer />} />
            <Route path="/category/:type" element={<ItemlistContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
