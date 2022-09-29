import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Main } from "./Pages/Main";
import NavBottom from "./components/NavBottom";
import ContactFormContext from "./Context/ContactFormContext";
import ContactModal from "./Pages/Pages/Contact/Comps/ContactModal";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
