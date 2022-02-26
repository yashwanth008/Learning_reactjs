import React from 'react';
import ReactDOM from 'react-dom';



export default function Card(props){
    let badgeText
    if(props.item.openspots === 0){
        badgeText = "SOLDOUT"
    }else if(props.item.location === "Online"){
        badgeText = "Online"
    }
    return(
        <div className="card">
            {/* require(`../images/${props.img}`) */}{//this is for using from images folder in prj require is compl
            }
        {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="cardimage" src={props.item.img} alt =" Images"/>
            <div className="stats">
                <span>{props.item.name}</span>
                {(props.item.gender) && <span>({props.item.gender})</span>}
                <span>{props.item.status}</span>
            </div>
            <p>
            {props.title}
            </p>

         
        </div>
    )
}