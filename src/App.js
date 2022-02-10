import React, { Component } from "react";
import ItemlistContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ItemlistContainer />
      </div>
    );
  }
}

export default App;
