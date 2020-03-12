import React from "react"

function Popup(props){
    const url="https://image.tmdb.org/t/p/w370_and_h556_bestv2"
    const imgi=url+props.selected.poster_path
    return(
        <section className="popup">
            <div className="content">
                <h2>{props.selected.title}</h2>
                <p className="rating">Release Date: {props.selected.release_date}</p>
                <p className="rating">Rating: {props.selected.vote_average}</p>
                <div className="plot">
                    <img src={imgi} alt="Not Showing"/>
                    <p>
                        Introduction: {props.selected.overview}
                    </p>
                </div>
                <button className="close" onClick={props.closepopup}>Close</button>
            </div>
        </section>

    )
}

export default Popup