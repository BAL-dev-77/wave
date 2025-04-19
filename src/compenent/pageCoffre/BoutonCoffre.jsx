import React from "react";
import BouclerCompte from "./BouclerCompte";

export default function BoutonCoffre(){
    return <>
        <div className="BoutonCoffre">
            <BouclerCompte signe="+" texte="Garder" />
            <BouclerCompte signe="-" texte="Recupérer" />
        </div>
    </>
}