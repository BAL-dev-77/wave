import React from "react";
import Titre1 from "../pageParametre/Titre1";
import TitrePaiement from "../pagePaiement/TitrePaiement";
import ItemPaiement2 from "../pagePaiement/ItemPaiement2";

import Coris from "../img/coris.png"
import Orabank from "../img/orabank.png"
import UBA from "../img/uba.png"
import ADVANS from "../img/advans.png"
import BAOBAB from "../img/baobab.png"



const data= [
    {id: 1, name: "Banque", categorie: "titre"},
    {id: 2, img:Coris ,name: "Coris", categorie: "element"},
    {id: 3, img:Orabank, name: "Orabank", categorie: "element"},
    {id: 4, img:UBA , name: "UBA", categorie: "element"},
]
const dota= [
    {id: 1, name: "SFD", categorie: "titre"},
    {id: 2, img:ADVANS ,name: "Advans", categorie: "element"},
    {id: 3, img:BAOBAB ,name: "Baobab", categorie: "element"},
]

export default function Banque(){
    return <>
        <div className="banque">
            <Titre1 Titre1="Lier votre banque ou SDF" />
            <input type="text" placeholder="Rechercher" style={{width: 401, height:48, marginLeft:22,marginTop:9, paddingLeft:40,}}/>
            <div className="bgBanque Banque">
                {data.map((item) => item.categorie === 'titre'?(
                <TitrePaiement key={item.id} titre={item.name}  /> 
                ):(
                <ItemPaiement2 key={item.id} name={item.name} image={item.img} />))}
            </div>  
            <div className="bgBanque1 Banque">
                {dota.map((item) => item.categorie === 'titre'?(
                <TitrePaiement key={item.id} titre={item.name}  /> 
                ):(
                <ItemPaiement2 key={item.id} name={item.name} image={item.img} />))}
            </div>            
        </div>
    </>
}