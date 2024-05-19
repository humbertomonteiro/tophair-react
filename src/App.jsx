import "./App.css";

import { BrowserRouter, useParams } from "react-router-dom";

import Header from "./components/Header";
import RouterApp from "./router/RouterApp";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouterApp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
