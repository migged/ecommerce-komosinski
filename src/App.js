import NavBar from "./components/NavBar/NavBar";
import ItemlistContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.js/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { NotificationServicesProvider } from "./services/notification/NotificationServices";

const App = () => {
  return (
    <NotificationServicesProvider>
      <CartContextProvider>
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
      </CartContextProvider>
    </NotificationServicesProvider>
  );
};
export default App;
