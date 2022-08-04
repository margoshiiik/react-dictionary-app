import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";
import Definition from "./Definition"

export default function Dictionary(){
    let [keyword, setKeyword] = useState(""); 
    let [result, setResult] = useState(null);

    function setKeywordOnChange(event){ 
        setKeyword(event.target.value);
    }

    function handleResponse(response){
        console.log(response.data[0])
        setResult(response.data[0]); 
    }

    function search(event){
        event.preventDefault(); 
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse)
    }


    return (
        <div className="Dictionary ">
            <h2 className="mt-3 text-center">What are you looking for?</h2>
            <form className="input-group mt-5 mb-3" onSubmit={search}>
                <input type="text" className="form-control" placeholder="Search" onChange={setKeywordOnChange}/>
                <button className="btn btn-dark" type="button" id="button-addon2" onClick={search}>Search</button>
            </form>
             <Definition word={result}/> 
        </div>
    )
}