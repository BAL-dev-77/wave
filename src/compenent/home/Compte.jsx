import React from "react";
import { Link } from "react-router-dom";
import Vue from "../img/vue.png"
import ParametreDS from "../img/ParametreDS.png"
import vecteur from "../img/Vector.png"


export default function Compte(){
    return <>
        <div className="flotteur">
            <Link to='/parametre' ><img src={ParametreDS} alt="" className="logoParametre"/> </Link>
            <div className="dp">
                <div className="chiffre">17.267</div>
                <div className="monnaie"> F</div>
                <div className="logoVue"><img src={Vue} alt="" /></div>
            </div>
            <div className="scanner"><img src={vecteur} alt="" /></div>
        </div>
    </>
}