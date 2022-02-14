import React, { Component } from "react";
import ItemBox from "./components/ItemBox/ItemBox";
import ItemlistContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ItemlistContainer />
        <ItemBox />
      </div>
    );
  }
}

export default App;
