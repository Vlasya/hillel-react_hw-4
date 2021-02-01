import React from 'react'
import s from './UserRender.module.sass'


export const UserRender = (props) => {

    const {id, name, surname, onChangeUser,onSelect} = props;
    return (
        <div className={s.wrapper} onClick={() => {
            onChangeUser({id,name,surname});
            onSelect(false);

        }}>
            <div className={s.name}>{name}</div>
            <div className={s.surname}>{surname}</div>
        </div>
    )
}
