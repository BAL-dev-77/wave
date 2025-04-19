import React from "react";
import Titre1 from "../pageParametre/Titre1";
import TitrePaiement from "./TitrePaiement";
import ItemPaiement1 from "./ItemPaiement1";
import ItemPaiement2 from "./ItemPaiement2";

import Facture from "../img/factures.png"
import Restaurant from "../img/restaurant.png"
import Shopping from "../img/shopping.png"
import Tourisme from "../img/tourisme.png"
import Canal from "../img/canal.png"
import Fer from "../img/ferpage.png"
import CIE from "../img/cie.png"
import SODECI from "../img/sodeci.png"
import CIEPREPAYER from "../img/cieprepayer.png"
import CI from "../img/ci.png"
import CNPS from "../img/cnps.png"
import HKB from "../img/hkb.png"



const data=[
    {id:1, img:Facture ,  categorie: "debut"},
    {id:2, img:Restaurant ,  categorie: "debut"},
    {id:3, img:Shopping , categorie: "debut"},
    {id:4, img:Tourisme ,  categorie: "debut"},
    {id:5,  name:"Favoris", categorie: "titre"},
    {id:6, img:Canal, name:"Canal+", categorie: "element"},
    {id:7, img:Fer, name:"FER PEAGE", categorie: "element"},
    {id:8, img:CIE, name:"Factures CIE", categorie: "element"},
    {id:9, img:SODECI, name:"Factures SODECI", categorie: "element"},
    {id:10, img:CIEPREPAYER , name:"Prépayé CIE", categorie: "element"},
    {id:11,  name:"Factures", categorie: "titre"},
    {id:12, img:CI , name:"Côte d'Ivoire Terminal", categorie: "element"},
    {id:13, img:CNPS , name:"Pont HKB", categorie: "element"},
    {id:14, img:HKB , name:"RSTI CNPS", categorie: "element"},
]

export default function Paiement(){
    return <>
    <div className="paiement">
        <Titre1 Titre1="Paiement" />
        <input type="text" placeholder="Chercher par nom" style={{width: 401, height:48, marginLeft:22,marginTop:9, paddingLeft:40 }}/>
        <div>
                {data.map((item) => item.categorie === 'debut' ? (
                    <ItemPaiement1 key={item.id} name={item.name} image={item.img} />
                ) : item.categorie === 'titre'?(
                <TitrePaiement key={item.id} titre={item.name} /> 
                ):(
                <ItemPaiement2 key={item.id} name={item.name} image={item.img} />))}
        </div>
    </div>
    </>
}