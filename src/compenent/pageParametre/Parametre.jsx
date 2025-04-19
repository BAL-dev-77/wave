import React from "react";
import TitreParametre from "./TitreParametre";
import ItemParametre from "./itemParametre";
import Maison from "../img/maison.png"
import Partage from "../img/partage.png"
import Etoile from "../img/etoile.png"
import Telephone from "../img/telephone.png"
import Liste from "../img/liste.png"
import Location from "../img/localisation.png"
import Portable from"../img/portable.png"
import Bouclier from "../img/bouclier.png"
import Titre1 from "./Titre1";

 const data =[
    { id:1, name:'Compte',  categorie:'titre'},
    { id:2, name:'Ajouter un autre compte', img: Maison, categorie:'element'},
    { id:3, name:'Partager',  categorie:'titre'},
    { id:4, name:'Inviter un ami à rejoindre Wave', img:Partage, categorie:'element'},
    { id:5, name:'Utiliser le code promotionnel', img:Etoile, categorie:'element'},
    { id:6, name:'Support',  categorie:'titre'},
    { id:7, name:'Contacter le service client', img:Telephone, categorie:'element'},
    { id:8, name:'Verifier votre plafond', img:Liste, categorie:'element'},
    { id:9, name:'Trouver les agents à proximité', img:Location, categorie:'element'},
    { id:10, name:'Sécurité',  categorie:'titre'},
    { id:9, name:'Vos appareils connectés', img:Portable, categorie:'element'},
    { id:9, name:'Modifier votre code secret', img:Bouclier, categorie:'element'},
 ]



export default function Parametre(){
    return <>
        <div className="parametre">
            <Titre1  Titre1="Paramètres"/>
            <div>
                {data.map((item) => item.categorie === 'titre' ? (
                <TitreParametre key={item.id} titre={item.name} />) : 
                (<ItemParametre key={item.id} name={item.name} image={item.img} />))}
            </div>

        </div>
    </>
}