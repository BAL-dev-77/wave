import React from "react";

export default function ItemPaiement2({image, name }){
    return <>
        <div className="ItemPaiement2">
            <div><img src={image} alt=""  /></div>
            <div className="text2">{name} </div>
        </div>
    </>
}