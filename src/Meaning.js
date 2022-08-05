import React from "react";
import Synonyms from "./Synonyms"

export default function Meaning(props) {
    return (
        <div className="meaning ms-5">
            <h3 className="ms-5 mt-5 mb-3">{props.meaning.partOfSpeech}</h3>
                {props.meaning.definitions.map(function (definition, index) {
                    console.log(definition)
                    return (
                    <div key={index}>
                        <p>
                        <b>Definition:</b> {definition.definition}
                        <br />
                        <em>{definition.example}</em>

                        <Synonyms synonyms={definition.synonyms}/>
                        </p>
                    </div>
                    );
            })}
        </div>
    )
}