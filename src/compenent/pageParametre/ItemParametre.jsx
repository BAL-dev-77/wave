import React from "react";

export default function ItemParametre({image, name }){
    return <>
        <div className="ItemParametre">
            <div><img src={image} alt=""  /></div>
            <div>{name} </div>
        </div>
    </>
}