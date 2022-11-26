import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";


export default function App() {

  return (
    <div>
      <Navbar color={"#FE86BC"} />
      <ItemListContainer greeting={"¡Bienvenidos!"} />
      <Footer />
    </div>
  );
}