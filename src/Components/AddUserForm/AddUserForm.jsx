import React from 'react'
import s from './AddUserForm.module.sass'


export class AddUserForm extends React.Component{


    render(){
        return(
            <div className={s.wrapper}>
                <input type="text"/>
                <input type="text"/>
            </div>
        )
    }
}