import React from "react"

function Contactcard(props){
    console.log(props)

    return(
        <div className="contact">
            <h1>name:{props.contact.name}</h1>
            <h2>address:{props.contact.address}</h2>
        </div>

    )
}

export default Contactcard

function Joke(props){
    console.log(props)
    return(                                      
        <div className="joker">                  
            <h1>joke:{props.content}</h1>        
            <h2>don't wugio</h2>                 
        </div>                                   
    )
}

export default Joke
