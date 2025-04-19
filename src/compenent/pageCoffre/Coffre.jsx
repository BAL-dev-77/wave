import React from "react";
import Titre1 from "../pageParametre/Titre1";
import CoffreCompte from "./CompteCoffre";
import BoutonCoffre from "./BoutonCoffre"
import { IoMdLock } from "react-icons/io";

export default function Coffre(){
    return <>
        <div className="coffre">
            <Titre1 />
            <CoffreCompte />
            <BoutonCoffre />   
            <div className="ItemParametre">
                <IoMdLock size={32}/>
                <div className="pd" >Bloquez votre compte</div>
            </div>
            <div className=" md">  
            <span style={{ marginLeft: '10px' }}></span> Votre Coffre est vide! Appuyer sur <br/> «Garder» pour commencer à mettre de <br/> 
            <span style={{ marginLeft: '80px' }}></span>l’argent de côté
            </div>
        </div>
    </>
}