import React from "react";
import Coffre from "../img/Frame.png"


export default function CoffreCompte(){
    return <>
        <div className="iconeCoffre">
            <div><img src={Coffre} alt="" /> </div>
            <div className="textCoffre">COFFRE</div>
        </div>
        <div className="  montantCoffre">
                <div className="chiffre">0</div>
                <div className="monnaieCompte"> F</div>
            </div>
    </>
}