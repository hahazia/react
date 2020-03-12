import React from "react";
import axios from "axios"
import Search from "./component/search";
import Results from "./component/results";
import Popup from "./component/popup";
import Order from "./component/order";
import Gallery from "./component/gallery";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            s: "",
            results: [],
            selected: {}
        }
        this.handleInput = this.handleInput.bind(this)
        this.search = this.search.bind(this)
        this.openpopup=this.openpopup.bind(this)
        this.closepopup=this.closepopup.bind(this)
        this.gallery=this.gallery.bind(this)
    }

    gallery=()=>{
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=374c978e327ab1a65801f4731c336115&page=1&language=en-US&sort_by=release_date&page=5")
            .then((res) => {
                    const resultss=res.data.results
                    this.setState({
                            results:resultss
                        }
                    )
                }
            )
    }

    handleInput = (e) => {
        const s = e.target.value;
        this.setState({
            s: s
        })

    }

    search = (e) => {
        const apiurl = "http://api.themoviedb.org/3/discover/movie?api_key=374c978e327ab1a65801f4731c336115&page=1&query="
        if (e.key === "Enter") {
            axios.get(apiurl + this.state.s)
                .then((res) => {
                        const resultss=res.data.results
                        this.setState({
                                results:resultss
                            }
                        )
                    }
                )
        }
    }

    ordername=(e)=>{
        const apiurl = "http://api.themoviedb.org/3/discover/movie?api_key=374c978e327ab1a65801f4731c336115&page=1&query="
        const name=this.results.title
        axios.get(apiurl+this.stae.s+"&sort_by"+name+".asc")
            .then((res) => {
                    const resultss=res.data.results
                    this.setState({
                            results:resultss
                        }
                    )
                }
            )
    }



    openpopup=id=>{
        const url1="https://api.themoviedb.org/3/movie/"
        const url2 = "?api_key=374c978e327ab1a65801f4731c336115&language=en-US"
        axios.get(url1+id+url2)
            .then((res)=>{
                const state=res.data
                this.setState({
                    selected:state})
            })
    }

    closepopup=()=>{
        this.setState({
                selected:{}
            }

        )
    }


    render() {
        console.log(this.state.results)
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Movie Database</h1>
                </header>
                <main>
                    <Search handleInput={this.handleInput} search={this.search}/>
                    <Gallery results={this.state.results} openpopup={this.openpopup}/>
                    <Results results={this.state.results} openpopup={this.openpopup} />
                    <Order ordername={this.ordername} orderyear={this.orderyear}/>
                    {(typeof this.state.selected.title != "undefined")? <Popup selected={this.state.selected} closepopup={this.closepopup}/>:false}


                </main>
            </div>
        )
    }
}

export default App