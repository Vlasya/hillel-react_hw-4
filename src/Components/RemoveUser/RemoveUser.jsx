import React, {useState, useEffect} from 'react'
import s from './RemoveUser.module.sass'


export const EditUser = (props) => {
    //data from props from ContactBook
    const {Users: {id, name, surname}, onRemoveUser, onEditUser} = props;

    const [idUser, setIdUser] = useState(id)
    const [userName, setUserName] = useState(name);
    const [userSurname, setUserSurname] = useState(surname);


    useEffect(() => {
        setIdUser(id)
        setUserName(name)
        setUserSurname(surname)


    }, [name, surname])
    const user = {
        id: idUser,
        name: userName,
        surname: userSurname
    }


    return (

        <div className={s.wrapper}>
            <div className={s.form}>
                <input onChange={(e) => setUserName(e.target.value)} value={userName} type="text"/>
                <input onChange={(e) => {
                    setUserSurname(e.target.value)
                }} value={userSurname} type="text"/>
            </div>

            <div className={s.buttons}>
                <button onClick={(e) => {
                    onEditUser(user);
                    setIdUser(null);
                    setUserName('');
                    setUserSurname('')
                }}>Save
                </button>


                <button onClick={(e) => {
                    onRemoveUser(user);
                    setIdUser(null);
                    setUserName('');
                    setUserSurname('')
                }}>Delete
                </button>
            </div>

        </div>
    )
}