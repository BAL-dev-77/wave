import './App.css'
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import Home from './compenent/home/Home';
import Banque from './compenent/pageBanque/Banque'
import Coffre from './compenent/pageCoffre/Coffre';
import Paiement from './compenent/pagePaiement/Paiement';
import Parametre from './compenent/pageParametre/Parametre';
import Transfert from './compenent/pageTransfert/Tansfert';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transfert" element={<Transfert />} />
        <Route path="/paiement" element={<Paiement />} />
        <Route path="/banque" element={<Banque />} />
        <Route path="/coffre" element={<Coffre />} />
        <Route path="/parametre" element={<Parametre />} />
        <Route path="/titre1" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App
