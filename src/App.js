import React from 'react'
import './App.css';
import {FetchRequest} from "./Components/ContactBook/FetchRequest/FetchRequest";



export class App extends React.Component{
    render(){
        return(
            <div className="App">
                <FetchRequest/>
            </div>
        )
    }
}
