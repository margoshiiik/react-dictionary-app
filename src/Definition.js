import React from "react";
import Meaning from "./Meaning"
import Phonetic from './Phonetic'
import "./Dictionary.css"
import "./Definition.css"

export default function Definition(props){
    if(props.word) {
    return(
        <div className="Definition">
            <section>
                <h2>{props.word.word}</h2>

                    {props.word.phonetics.map((phonetics, index) => {
                        return ( <div key={index}>
                            <Phonetic phonetics={phonetics}/>
                        </div> )

                    })}
                
            </section>


              {props.word.meanings.map(function (meaning, index) {
                return (
            <section key={index}>
               <Meaning meaning={meaning}/>
            </section>
          );
        })}
        </div>
    )}
    else return null;
}