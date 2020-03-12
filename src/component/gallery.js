import React from "react"
import axios from "axios"
import Result from "./Result";

function Gallery(results,openpopup){
    return(
        <section className="results">
            {results.map(result=>(
                <Result key={result.id} result={result} openpopup={openpopup} />
            ))}
        </section>
    )
}

export default Gallery;
