import React from 'react'
import s from './UserRender.module.sass'


export const UserRender =(props)=>{
    return(
        <div className={s.wrapper}>
                <div className={s.name}>{props.name}</div>
                <div className={s.surname}>{props.surname}</div>
        </div>
    )
}
