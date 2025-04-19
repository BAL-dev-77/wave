import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Titre1(props){
    const texte= props.Titre1
    return <>
       <div className="Titre1">
       <Link to="/titre1"><div> <FaArrowLeft size={24} color="black" /></div></Link>
        <div className="h1">{texte}</div>
       </div>
    </>
}   