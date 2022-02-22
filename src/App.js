import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemlistContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.js/ItemDetailContainer";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ItemlistContainer />
        <ItemDetailContainer />
      </div>
    );
  }
}

export default App;
