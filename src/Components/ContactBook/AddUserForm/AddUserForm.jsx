import React ,{useState} from 'react'
import s from './AddUserForm.module.sass'



export const AddUserForm =({onSave,onDeleteUser})=>{
    const [name, setName]= useState('');
    const [surname, setSurname]= useState('')

    return(

        <div className={s.wrapper}>
            <div className={s.inputs}>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter name...'/>
                <input type="text" value={surname} onChange={(e)=>{setSurname(e.target.value)}}placeholder='Enter surname...'/>
            </div>
           <div className={s.button}>
               <button onClick={
                   ()=>{ onSave({name,surname});
                       setName('');
                       setSurname('')
                   }} >Add</button>
           </div>

        </div>
    )
}