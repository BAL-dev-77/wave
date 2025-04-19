import React from "react";
import Titre1 from "../pageParametre/Titre1";
import ItemTransfert from "./ItemTransfert";
import TitrePaiement from "../pagePaiement/TitrePaiement";
import { IoMdPerson } from 'react-icons/io';

const data=[
    {id: 1, name: "Favoris", categorie: "titre"},
    {id: 2, name: "Ange Fabrice", number:"07 12 13 14 15", categorie: "element"},
    {id: 3, name: "Zokou Gbeuli", number:"07 14 15 18 15", categorie: "element"},
    {id: 4, name: "Arran Mincheu", number:"07 12 09 85 15", categorie: "element"},
    {id: 5, name: "Manoir Porant", number:"07 12 09 85 15", categorie: "element"},
    {id: 6, name: "Mautivé Saurice", number:"07 12 09 85 15", categorie: "element"},


]

export default function Transfert(){
    return <>
        <div className="transfert">
          <Titre1  Titre1="Envoyer de l'Argent" />
          <textarea placeholder="À" style={{width: 401, height:48, marginLeft:22,marginTop:9}}/>
          {data.map( item => item.categorie === "titre" ?(
            <TitrePaiement  titre={item.name}/>
          ):(
            <div className="iconeBonhomme">
            <div className="cercle"><IoMdPerson size={32} color="gray" /></div>
            <ItemTransfert key={item.id} name={item.name} number={item.number}/>
          </div>
          ))}
        </div>
    </>
}