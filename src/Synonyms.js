import React from "react";
import "./Synonyms.css"

export default function Synonyms(props){
    console.log(props.synonyms)
    if(props.synonyms.length !== 0) {
        return (
            <div className="Synonyms">
            <ul >
                {props.synonyms.map((synonym, index) =>{
                    return <li key={index}>{synonym}</li>
                })}
            </ul>
            </div>
        )
    }
    else return null
}