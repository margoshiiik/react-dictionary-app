import React from "react";
import Synonyms from "./Synonyms"
import "./Meaning.css"

export default function Meaning(props) {
    return (
        <div className="Meaning ms-5">
            <h3 className="ms-3 mb-3">{props.meaning.partOfSpeech}</h3>
                {props.meaning.definitions.map(function (definition, index) {
                    console.log(definition)
                    return (
                    <div key={index}>
                        <p>
                         {definition.definition}
                        <br />
                        <div className="example">{definition.example}
                        </div>

                        <Synonyms synonyms={definition.synonyms}/>
                        </p>
                    </div>
                    );
            })}
        </div>
    )
}