"use client";
import { faMessage, faPerson, faLeftLong, faLock, faBook } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import EditProfile from "../[components]/FirstTime/Profile/EditProfile"
import Post from "../[components]/FirstTime/Main/Post"
import EditModal from "../[components]/FirstTime/Profile/EditModal"
import { useState } from "react";

const page = () => {
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState('');

    const editMe = (item) =>{
        setEditItem(item);
        setEdit(true);
    }
  return (
    <main className="pt-[2vh] min-h-screen pb-11 bg-bright">
        <div className="flex items-center gap-3">
            <Link href='/'>
                <FontAwesomeIcon className="ml-6 text-army text-2xl" icon={faLeftLong}/>
            </Link>
            <p className="text-dark font-bold text-2xl">Profile</p>
         </div>
        <hr className="bg-army h-[2px] w-4/5 mx-auto border-none mt-[2vh]"/>
        <div className="w-11/12 mx-auto">
            <div className="flex flex-col gap-3 items-center">
                <img className="w-[25%] mt-4" src="https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/boy_people._avatar_man_male_teenager_user_-64.png" alt="boy" />
                <div className='flex text-center flex-col items-center w-full'>
                    <p className='text-dark font-bold text-xl'>Jubemi Anthony</p>
                    <p className='text-grey font-semibold'>@jubemi_anthony</p>
                </div>
                <section className="w-full">
                    <EditProfile editMe={editMe} icon={faPerson} item={'Full Name'}/>
                    <EditProfile editMe={editMe} icon={faBook} item={'Bio'}/>
                    <EditProfile editMe={editMe} icon={faMessage} item={'Email'}/>
                    <EditProfile editMe={editMe} icon={faPerson} item={'User Name'}/>
                    <EditProfile editMe={editMe} icon={faLock} item={'Password'}/>
                </section>
            </div>
            <hr className="bg-army h-[2px] w-4/5 mx-auto border-none mt-[2vh]"/>
            <section className="mt-5">
                <Post/>
                <Post/>
            </section>
        </div>
        {edit && <EditModal editItem={editItem} setEdit={setEdit}/>}
    </main>
  )
}

export default page