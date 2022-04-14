import About from "./components/About/About";
import Brands from "./components/Brands/Brands";
import Feature from "./components/Feature/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Logos from "./components/Logos/Logos";
import Offer from "./components/Offer/Offer";
import Popular from "./components/Popular/Popular";

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Popular/>
      <Feature/>
      <Brands/>
      <Offer/>
      <Logos/>
      <Footer/>
    </>
  );
}

export default App;
