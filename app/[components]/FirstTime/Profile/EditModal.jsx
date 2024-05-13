"use client";
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import InputProfileEdit from "./InputProfileEdit"
import { useState } from "react";
import { CURRENTURL } from "@/app/CONSTANTS";

const EditModal = ({setEdit, editItem, user}) => {
  const [itemChange, setItemChange] = useState({
    name: user?.name,
    bio: user?.bio || '',
    email: user?.email,
    userName: user?.userName || '',
    password: ''
  })
  const handleSubmit = async (e)=>{
    e.preventDefault;
    if(editItem === 'Email') return;

    const res = await fetch(`http://${CURRENTURL}/api/updateUser`, {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            editItem,
            name: itemChange.name,
            bio: itemChange.bio,
            email: itemChange.email,
            userName: itemChange.userName,
            password: itemChange.password
        })
      })
          const data = await res.json();
          alert(data.message);
          if(res.ok){
              localStorage.setItem("userInfo", JSON.stringify(data.user))
              setItemChange({
                name: data.user?.name,
                bio: data.user?.bio || '',
                email: data.user?.email,
                userName: data.user?.userName || '',
                password: ''
              })
          }
  }
  return (
    <section className="fixed top-[5%] bg-white shadow-2xl left-[5%] w-[90%] h-[70vh]">
        <div className="relative p-3">
            <FontAwesomeIcon onClick={()=> setEdit(false)} className="absolute top-3 text-2xl text-red-600 right-3" icon={faX}/>
            <p className='text-dark font-bold text-xl'>Edit {editItem}</p>
            <div className=" flex flex-col">
                <InputProfileEdit onChange={(e)=> setItemChange({...itemChange, name: e.target.value})} value={itemChange.name} access={editItem === 'Full Name'} placeholder={'Full Name'}/>
                <InputProfileEdit onChange={(e)=> setItemChange({...itemChange, bio: e.target.value})} value={itemChange.bio} access={editItem === 'Bio'} placeholder={'Bio'}/>
                <InputProfileEdit value={itemChange.email} access={false} placeholder={'Email'}/>
                <InputProfileEdit onChange={(e)=> setItemChange({...itemChange, userName: e.target.value})} value={itemChange.userName} access={editItem === 'User Name'} placeholder={'User Name'}/>
                <InputProfileEdit onChange={(e)=> setItemChange({...itemChange, password: e.target.value})} value={itemChange.password} access={editItem === 'Password'} placeholder={'Password'}/>
                <button onClick={handleSubmit} className="bg-army mt-5 text-xl font-semibold text-white p-2">Edit</button>
            </div>
        </div>
    </section>
  )
}

export default EditModal