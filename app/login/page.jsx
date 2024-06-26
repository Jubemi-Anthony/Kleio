"use client";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useState } from "react";
import { CURRENTURL } from "../CONSTANTS";

const Login = () => {
    const signInner = () =>{
        let isLoggedIn = localStorage.getItem("userInfo");
        if(isLoggedIn){
            isLoggedIn = JSON.parse(isLoggedIn)
            const id = isLoggedIn.id;
            window.location.href = `/home/${id}`;
        }else{
            signIn("google")
        }
    }
    const [input, setInput] = useState({email: '', password: ''});

    const onSubmit = async (e)=>{
        e.preventDefault();
        const res = await fetch(`http://${CURRENTURL}/api/verifyUser`, {
              method: 'POST',
              headers: {
                  "Content-Type" : "application/json"
              },
              body: JSON.stringify({
                  email: input.email,
                  password: input.password
              })
            })
                const data = await res.json();
                console.log(data.message);
                if(!data.user){
                alert(data.message1);
                switch (data.message) {
                    case "0":
                        window.location.href = `/register`;
                    break;
                    case "1":
                        setInput({email: '', password: ''})
                    break;
                    case "2":
                        setInput({email: '', password: ''})
                    break;
                    default:
                        setInput({email: '', password: ''})
                    break;
                }
                }else{
                    localStorage.removeItem("userInfo");
                    localStorage.setItem("userInfo", JSON.stringify(data.user))
                    window.location.href = `home/${_id}`
                }
            }
  return (
    <main className="h-screen pt-[2vh] bg-bright">
        <Link href='/register'>
            <FontAwesomeIcon className="ml-6 text-army text-2xl" icon={faLeftLong}/>
        </Link>
        <hr className="bg-army h-[2px] w-4/5 mx-auto border-none mt-[2vh]"/>
        <div className="w-11/12 mx-auto">
            <p className="font-bold text-4xl mt-10">{"Let's sign you in"}</p>
            <p className="text-grey text-2xl my-2 font-semibold">{"We've missed you"}</p>
            <form onSubmit={onSubmit} className="flex flex-col mt-8">
                <input value={input.email} onChange={(e)=>{setInput({...input, email: e.target.value})}} className="py-4 pl-3 bg-white mb-3" type="text" placeholder="Your email or phone number" required minLength={7}/>
                <input value={input.password} onChange={(e)=>{setInput({...input, password: e.target.value})}} className="py-4 pl-3 bg-white mb-3" type="password" placeholder="Password" required minLength={6}/>
                <Link href='/login'>
                    <p className="text-lg my-5 text-grey font-semibold">Forgot Password?</p>
                </Link>
                <button className="text-white bg-army py-3 rounded-xl flex justify-center items-center mt-5 gap-2 text-xl">Login</button>
            </form>
            <p className="text-center font-semibold text-xl my-5">or</p>
            <div className="flex flex-col gap-4 mt-10">
                <button onClick={signInner} className="text-dark bg-white py-3 rounded-xl flex justify-center items-center gap-2 text-xl">
                    <img className="w-7" src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-64.png" alt="google" />
                    Login with Google
                </button>
                <button className="text-dark bg-white py-3 rounded-xl flex justify-center items-center gap-2 text-xl">
                    <img className="w-7" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-64.png" alt="facebook" />
                    Login with Facebook
                </button>
            </div>
        </div>
    </main>
  )
}

export default Login