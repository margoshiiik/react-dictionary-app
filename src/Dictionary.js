import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";
import Definition from "./Definition"

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.default); 
    let [result, setResult] = useState(null);
    let [isLoaded, setLoaded] = useState(false);

    function setKeywordOnChange(event){ 
        setKeyword(event.target.value);
    }

    function handleResponse(response){
        setResult(response.data[0]); 
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
      }
    

    function search(){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse)
    }

    function load(){
        setLoaded(true); 
        search(); 
    }

    if(isLoaded) {
    
    return (
        <div className="Dictionary">
            <section>
            <h2 className="text-center">What are you looking for?</h2>
                <form className="input-group mt-5 mb-3" onSubmit={handleSubmit}>
                    <input type="text" className="form-control" placeholder={keyword} onChange={setKeywordOnChange}/>
                    <button className="btn btn-dark" type="button" id="button-addon2" onClick={handleSubmit}>Search</button>
                    
                </form>
                <span className="hint">Suggested word to search: yoga, dog, hello...</span>
            </section>
             <Definition word={result}/> 
        </div>
    )}
    else {
        load();
        return "Loading"
    }
}