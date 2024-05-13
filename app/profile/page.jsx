'use client'
import { useEffect, useState } from "react";
import { faMessage, faPerson, faLeftLong, faLock, faBook } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import EditProfile from "../[components]/FirstTime/Profile/EditProfile"
import Post from "../[components]/FirstTime/Main/Post"
import EditModal from "../[components]/FirstTime/Profile/EditModal"

const page = () => {
    const [edit, setEdit] = useState(false);
    const [editItem, setEditItem] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
      return () => {
        let isLoggedIn = localStorage.getItem("userInfo");
        if(!isLoggedIn){
            window.location.href = '/login';
        }else{
            isLoggedIn = JSON.parse(isLoggedIn);
            setUser(isLoggedIn);
        }
      }
    }, [])
    

    const editMe = (item) =>{
        setEditItem(item);
        setEdit(true);
    }

    const signOuttaHere = async ()=>{
        localStorage.removeItem("userInfo")
        window.location.href = '/login';
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
                <img className="w-[25%] rounded-full mt-4" src={user.img} alt={user.name} />
                <div className='flex text-center flex-col items-center w-full'>
                    <p className='text-dark font-bold text-xl'>{user.name}</p>
                    <p className='text-grey font-semibold'>{user.email}</p>
                </div>
                {
                    user.bio && 
                    <div className="flex flex-col items-center my-2 bg-white p-2 rounded-md">
                        <FontAwesomeIcon className="text-army text-xl" icon={faBook}/>
                        <p className="text-grey font-semibold italic">{user.bio}</p>
                    </div>
                }
                <section className="w-full">
                    <EditProfile editMe={editMe} icon={faPerson} item={'Full Name'}/>
                    <EditProfile editMe={editMe} icon={faBook} item={'Bio'}/>
                    <EditProfile editMe={editMe} icon={faMessage} item={'Email'}/>
                    <EditProfile editMe={editMe} icon={faPerson} item={'User Name'}/>
                    <EditProfile editMe={editMe} icon={faLock} item={'Password'}/>
                </section>
                <button onClick={()=> signOuttaHere()} className="bg-dark text-army text-2xl uppercase p-3 rounded-lg font-bold w-full">Sign Out</button>
            </div>
            <hr className="bg-army h-[2px] w-4/5 mx-auto border-none mt-[2vh]"/>
            <section className="mt-5">
                <Post/>
                <Post/>
            </section>
        </div>
        {edit && <EditModal user={user} editItem={editItem} setEdit={setEdit}/>}
    </main>
  )
}

export default page