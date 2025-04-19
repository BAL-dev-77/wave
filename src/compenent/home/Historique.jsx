import React from "react";

export default function Historique(){
    const transactions= [
        { name: 'Name_Number', date: '00 mois 0000 à 00:00', montant: "-45.450", id:1},
        { name: 'Name_Number', date: '00 mois 0000 à 00:00', montant: "-45.450", id:2},
        { name: 'Name_Number', date: '00 mois 0000 à 00:00', montant: "-45.450", id:3},
        { name: 'Name_Number', date: '00 mois 0000 à 00:00', montant: "-45.450", id:4},
        { name: 'Name_Number', date: '00 mois 0000 à 00:00', montant: "-45.450", id:5},
        { name: 'Name_Number', date: '00 mois 0000 à 00:00', montant: "-45.450", id:6},
        { name: 'Name_Number', date: '00 mois 0000 à 00:00', montant: "-45.450", id:7},



    ]
    return <>
        <div className="rallure"></div>
        {transactions.map(transactions =>(
            <div key={transactions.id} className="groupetransaction">
                <div className="transactionName ">
                    <div> {transactions.name} </div>
                    <div> {transactions.montant}F</div>
                </div>
                <div className="dateHistorique">{transactions.date}</div>
            </div>
        ) )}
      
    </>
}