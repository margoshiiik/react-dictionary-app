import React from "react";
import Meaning from "./Meaning"
import Phonetic from './Phonetic'

export default function Definition(props){
  //  console.log(props.word.phonetics)
    if(props.word) {
    return(
        <div className="Definition">
            <h2 className="text-center">{props.word.word}</h2>

            <div>
                {props.word.phonetics.map((phonetics, index) => {
                    return ( <div key={index}>
                        <Phonetic phonetics={phonetics}/>
                    </div> )

                })}
            </div>

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