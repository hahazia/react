import React from "react";
import axios from "axios"

//https://api.themoviedb.org/3/collection/{collection_id}?api_key=<<api_key>>&language=en-US

class Api extends React.Component{
    constructor() {
        super();
        this.state={
            loading:true,
            character:{}
        }
    }



    componentDidMount() {
        this.setState({loading:true})
        axios.get("https://swapi.co/api/people/1")
            .then((res)=>{
                console.log(res)
                const persons=res.data
                this.setState({
                    loading:false,
                    character:persons
                })
            })


    }

    render(){
        const text=this.state.loading?"loading...":this.state.character.name
        return (
            <div>
                {text}
            </div>

        );
    }
}



class Ap extends React.Component{
    constructor() {
        super();
        this.state={
            firstname:"",
            lastname:""
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
        [event.target.name]:event.target.value
   })

    }
    render(){
        return(
            <form>
                <input type="text" name="firstname" placeholer="First Name" onChange={this.handleChange}/>
                <br/>
                <input type="text" name="lastname" placeholer="Last Name" onChange={this.handleChange}/>
                <h1>{this.state.firstname} {this.state.lastname}</h1>
            </form>
        )
}

}

export default Api