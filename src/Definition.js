import React from "react";
import Meaning from "./Meaning"

export default function Definition(props){
    if(props.word) {
    return(
        <div className="Definition">
            <h2 className="text-center">{props.word.word}</h2>
                {props.word.meanings.map(function (meaning, index) {
                return (
                <div key={index}>
               <Meaning meaning={meaning}/>
            </div>
          );
        })}
        </div>
    )}
    else return null;
}