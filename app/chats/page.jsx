'use client'
import { faLeftLong, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"
import ChatHead from "../[components]/FirstTime/ChatHead"

const Chats = () => {
  const [choice, setChoice] = useState('all');
    return (
    <main className="pt-[2vh] min-h-screen pb-11 bg-bright">
        <div className="flex items-center gap-3">
            <Link href='/'>
                <FontAwesomeIcon className="ml-6 text-army text-2xl" icon={faLeftLong}/>
            </Link>
            <p className="text-dark font-bold text-2xl">Chats</p>
         </div>
        <hr className="bg-army h-[2px] w-4/5 mx-auto border-none mt-[2vh]"/>
        <div className="w-11/12 mx-auto">
            <div className="bg-white p-3 flex mt-3 rounded-lg items-center">
                <FontAwesomeIcon icon={faSearch}/>
                <input className="outline-none w-full bg-transparent pl-1" type="search" placeholder="Search"/>
            </div>
            <div className="flex items-center gap-5 mt-5 text-lg font-semibold">
                <p onClick={()=> setChoice('all')} className={choice === 'all' && 'selectedMessage'}>All</p>
                <p onClick={()=> setChoice('read')} className={choice === 'read' && 'selectedMessage'}>Read</p>
                <p onClick={()=> setChoice('unread')} className={choice === 'unread' && 'selectedMessage'}>Unread</p>
            </div>
            <section className="mt-5">
                <ChatHead/>
                <ChatHead/>
                <ChatHead/>
                <ChatHead/>
                <ChatHead/>
                <ChatHead/>
                <ChatHead/>
                <ChatHead/>
                <ChatHead/>
                <ChatHead/>
                <ChatHead/>
                <ChatHead/>
                <ChatHead/>
                <ChatHead/>
                <ChatHead/>
                <ChatHead/>
            </section>
        </div>
    </main>
  )
}

export default Chats