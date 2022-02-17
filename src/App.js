import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemlistContainer from "./components/ItemListContainer/ItemListContainer";

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
