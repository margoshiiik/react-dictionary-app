import React from "react";

export default function Phonetic(props){
    console.log(props.phonetics); 
    return (
        <div className="Phonetic text-center">
            <h4>{props.phonetics.text}</h4>
            <a href={props.phonetics.audio} target="_blank">listen</a>
        </div>
    )
}