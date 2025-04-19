import React from "react";
import { Link } from "react-router-dom";
import Homme from "../img/homme.png"
import Frame10 from "../img/Frame 10.png"
import Frame11 from "../img/Frame 11.png"
import Frame12 from "../img/Frame 12.png"

export default function ItemHome() {
  return (
    <div className="groupItem">
      <Link to="/transfert"><img src={Homme} alt="Banque" /></Link>
      <Link to="/paiement"><img src={Frame10} alt="Coffre" /></Link>
      <Link to="/banque"><img src={Frame11} alt="Paiement" /></Link>
      <Link to="/coffre"><img src={Frame12} alt="Paramètre" /></Link>
    </div>
  );
}
