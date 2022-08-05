import React from "react";

export default function Synonyms(props){
    console.log(props.synonyms)
    if(props.synonyms.length !== 0) {
        return (
            <ul>
                Synonyms:
                {props.synonyms.map((synonym, index) =>{
                    return <li key={index}>{synonym}</li>
                })}
            </ul>
        )
    }
    else return null
}