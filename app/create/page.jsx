"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeftLong } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useState } from "react";

const Create = () => {
    const [email, setEmail] = useState(true)
  return (
    <main className="bg-bright pt-[2vh] h-screen">
         <div className="flex items-center gap-3">
            <Link href='/register'>
                <FontAwesomeIcon className="ml-6 text-army text-2xl" icon={faLeftLong}/>
            </Link>
            <p className="text-dark font-bold text-2xl">Create an account</p>
         </div>
        <hr className="bg-army h-[2px] w-4/5 mx-auto border-none mt-[2vh]"/>
        <div className="w-11/12 mx-auto">
            <div className="flex justify-between font-bold text-2xl my-3 w-11/12 mx-auto">
                <p onClick={()=> setEmail(true)} className={email && 'selectedChoiceForm'}>With Email</p>
                <p onClick={()=> setEmail(!true)} className={!email && 'selectedChoiceForm'}>With Phone</p>
            </div>
            <form className="flex flex-col">
                {
                    email ? 
                    <div className="formGroup">
                        <label>Your email</label>
                        <input type="email" name="contact" required minLength={7}/>
                    </div> :
                    <div className="formGroup">
                        <label>Your phone number</label>
                        <input type="text" name="contact" required minLength={7}/>
                    </div>
                }
                <div className="formGroup">
                    <label>Your name</label>
                    <input type="text" name="name" required minLength={7}/>
                </div>
                <div className="formGroup">
                    <label>Password</label>
                    <input type="password" name="password" required minLength={6}/>
                </div>
                <div className="formGroup">
                    <label>Confirm Password</label>
                    <input type="password" name="password" required minLength={6}/>
                </div>
                <button className="text-white bg-army py-3 rounded-xl flex justify-center items-center mt-[15vh] gap-2 text-xl">Register</button>
            </form>
        </div>
    </main>
  )
}

export default Create