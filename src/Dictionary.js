import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";
import Definition from "./Definition"
import Photos from "./Photos"

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.default); 
    let [result, setResult] = useState(null);
    let [isLoaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

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

      function handleResponsePhotos(response){
        setPhotos(response.data.photos)
      }
    

    function search(){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse)

        let apiKey = '563492ad6f9170000100000199db2bef95a14a59b372485c93690e84'
        let api = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization : `Bearer ${apiKey}`}; 
        axios.get(api, {headers: headers }).then(handleResponsePhotos)
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
             <Photos photos={photos}/> 
        </div>
    )}
    else {
        load();
        return "Loading"
    }
}