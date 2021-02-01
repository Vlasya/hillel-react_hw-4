import React from 'react'
import {ContactBook} from "../ContactBook";

const URL = 'https://6014382db538980017568e5d.mockapi.io'

export class FetchRequest extends React.Component {
    state = {
        users: []
    }

    async fetchData() {
        const response = await fetch(`${URL}/user_data`)
        const data = await response.json()

        this.setState({
            users: data
        })
    }

    async componentDidMount() {
        await this.fetchData()
    }

    async addUser({name, surname}) {
        await fetch(`${URL}/user_data`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, surname})
        });
        await this.fetchData()
    }

    async removeUser({id}) {
        await fetch(`${URL}/user_data/${id}`, {
            method: 'DELETE'
        });
        await this.fetchData()
    }

    async editUser({id,name,surname}){
        await fetch(`${URL}/user_data/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, surname})
        });
        await this.fetchData()
    }


    render() {
        return (
            <ContactBook users={this.state.users}
                         onAddUser={user => this.addUser(user)}
                         onRemoveUser={user => this.removeUser(user)}
                         onEditUser={user=> this.editUser(user)}
            />

        )
    }
}