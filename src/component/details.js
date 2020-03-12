import React from "react"
import axios from "axios"

class Details extends React.Component{
    constructor() {
        super();
        this.state={
             movie:{}
        }
    }

    componentDidMount(){
        axios.get("http://api.themoviedb.org/3/collection/10?api_key=374c978e327ab1a65801f4731c336115")
            .then((res)=>{
                console.log(res)
                const moviedata=res.data
                this.setState({
                    movie:moviedata

                })
        })
    }

    render(){
        return(
            <div>
                {this.state.movie.name}
            </div>

        )
}
}

export default Details