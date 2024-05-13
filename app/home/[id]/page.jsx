'use client'
import { useEffect, useState } from 'react'
import Main from '../../[components]/FirstTime/Main/Main'
import { CURRENTURL } from '@/app/CONSTANTS'

const Home = ({params}) => {
  const [loggedUser, setLoggedUser] = useState(null);
    useEffect(() => {
      return async () => {
        let isLoggedIn = localStorage.getItem("userInfo");

        if(!isLoggedIn){
              const res = await fetch(`http://${CURRENTURL}/api/getUser`, {
              method: 'POST',
              headers: {
                  "Content-Type" : "application/json"
              },
              body: JSON.stringify({
                  id: params.id
              })
            })
            if (res.ok){
              const data = await res.json();
              console.log(data.user);
              const {_id, name, email, img, createdAt} = data.user;
              localStorage.setItem("userInfo", JSON.stringify({
                name,
                email,
                img,
                createdAt,
                id: _id
              }))
              isLoggedIn = localStorage.getItem("userInfo");
              isLoggedIn = JSON.parse(isLoggedIn)
              setLoggedUser(isLoggedIn);
            }
        }else{
          isLoggedIn = JSON.parse(isLoggedIn)
          setLoggedUser(isLoggedIn);
        }
      }
        
    }, [])
  
  return (
    <Main user={loggedUser}/>
  )
}

export default Home