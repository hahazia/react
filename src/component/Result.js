import React from "react";

function Result({result,openpopup}){
    const url="https://image.tmdb.org/t/p/w370_and_h556_bestv2"
    const poster=result.poster_path
    const a=url+poster
    return(
        <div className="result"  onClick={()=>openpopup(result.id)}>
            <img src={a} alt="No Picture"/>
            <h3>{result.title}</h3>
        </div>
    )
}

export default Result