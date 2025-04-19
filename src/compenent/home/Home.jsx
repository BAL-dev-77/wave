import React from "react";
import Compte from "./Compte";
import ItemHome from "./ItemHome";
import Historique from "./Historique";

export default function Home(){
    return <>
        <div className="home">
            <Compte />
            <ItemHome />
             <Historique />
        </div>
    </>
}