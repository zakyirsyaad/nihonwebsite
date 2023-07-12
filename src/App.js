import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Header from "./component/header/header";
import './page/style.css'
import Footer from "./component/footer/footer";
import Custom from "./page/custom";
import CartTable from "./page/cart";
import StatusPengiriman from "./page/status";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/cart" element={<CartTable />} />
        <Route path="/status" element={<StatusPengiriman />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
