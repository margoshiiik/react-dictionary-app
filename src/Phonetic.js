import React from "react";
import "./Phonetic.css"

export default function Phonetic(props){
    console.log(props.phonetics); 
    if(props.phonetics.text) {
    return (
        <div className="Phonetic mt-4">
            <a href={props.phonetics.audio} target="_blank">listen</a>
            <b><span>{props.phonetics.text}</span></b>
        </div>
    )
    }
}