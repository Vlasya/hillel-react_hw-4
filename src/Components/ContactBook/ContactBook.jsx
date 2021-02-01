import React from 'react'
import s from './ContactBook.module.sass'
import {UserRender} from "./UserRender/UserRender";
import {AddUserForm} from "./AddUserForm/AddUserForm";
import {EditUser} from "../RemoveUser/RemoveUser";


 export class ContactBook extends React.Component{
    state={
        user:{
            id:null,
            name:'',
            surname:'',
        },
        addUserForm:true
    }


    changeForm(){
        this.setState({
            addUserForm:false

        })
    }
    addInState(user){
        const {id,name,surname}=user
        this.setState({
            user:{
                id:id,
                name:name,
                surname:surname
            }
        })
    }

     render(){

        const {users, onAddUser, onRemoveUser,onEditUser} = this.props;
        return(
            <div className={s.wrapper}>
                <div className={s.usersData}>
                    <div className={s.userTitle}>
                        <h3>name</h3>
                        <h3>surname</h3>
                    </div>
                    {users.map((user, index) => {
                        //Забираем данные выбранного юзера из UserRender и сохраняем в state + меняем форму
                        return <UserRender onChangeUser={user => this.addInState(user)}
                                           onSelect={() => this.changeForm()}
                                           key={index} {...user}
                                             />
                    })}
                    <button onClick={() => {
                        this.setState({addUserForm:true})
                    }}>Add User
                    </button>
                </div>
                <div className={s.addUser}>
                    <div>
                        {this.state.addUserForm && <AddUserForm onSave={user => {
                            onAddUser(user)
                        }}/>}
                    </div>
                    <div>
                        {/*//отправляем данные выбранного юзера в EditUser и передаем в remove and change*/}
                        {!this.state.addUserForm && <EditUser Users={this.state.user}
                                                              onRemoveUser={onRemoveUser}
                                                              onEditUser={onEditUser}/>}
                    </div>


                </div>

            </div>

        )
    }
 }