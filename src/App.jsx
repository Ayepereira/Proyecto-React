import './App.css';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Form } from './components/Form/Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import {ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from './context/CartContext/CartProvider';
function App() {
  return (
    <>
    <BrowserRouter> 
      <CartProvider> 
          <Nav />
          <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/datail/:id"element={<ItemDetailContainer/>}/>
          </Routes>
      </CartProvider>

    </BrowserRouter>
   </>
  );
}

export default App;
