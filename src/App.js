import React from 'react'
import './App.css';
import {UserRender} from "./Components/UserRender/UserRender";
import {AddUserForm} from "./Components/AddUserForm/AddUserForm";

export class App extends React.Component{

    state={
        users:[]
    }
 async componentDidMount() {
        const response =await fetch("https://6014382db538980017568e5d.mockapi.io/user_data")
     const data= await response.json()

     this.setState({
         users:data
     })
}

    render(){

        const {users} = this.state
        return(
            <div className="App">
                <div className='users-data'>
                    <div className='user-title'>
                        <h3>name</h3>
                        <h3>surname</h3>
                    </div>


                    {users.map( (user,index)=>{
                        return <UserRender key={index} {...user}/>
                    })}
                </div>
                <div className='add-user'>
                    <AddUserForm/>
                </div>

            </div>
        )
    }
}
