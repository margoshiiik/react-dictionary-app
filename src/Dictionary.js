import React, {useState} from "react";
import "./Dictionary.css"

export default function Dictionary(){
    let [keyword, setKeyword] = useState(""); 

    function setKeywordOnChange(event){ 
        setKeyword(event.target.value);
    }

    function showResult(event){
        event.preventDefault(); 
        alert(keyword);
    }


    return (
        <div className="Dictionary">
            <h2 className="mt-3">What are you looking for?</h2>
            <form class="input-group mt-5 mb-3" onSubmit={showResult}>
                <input type="text" class="form-control" placeholder="Search" onChange={setKeywordOnChange}/>
                <button class="btn btn-dark" type="button" id="button-addon2" onClick={showResult}>Search</button>
            </form>
        </div>
    )
}