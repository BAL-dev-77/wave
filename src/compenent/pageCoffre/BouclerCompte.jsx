import React from "react";

export default function BouclerCompte(props){
    const signeB= props.signe
    const text= props.texte
    return <>
        <div className="bouclerCoffre">
            <div className="signeBoutonCoffre"><span className="signeAjout">{signeB} </span></div>
            <div className="texteBoutonCoffre">{text}</div>
        </div>
    </>
}