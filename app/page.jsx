'use client';
import FirstTime from "./[components]/FirstTime/FirstTime";

export default function Home() {
  let isLoggedIn = localStorage.getItem("userInfo");
  if(isLoggedIn){
    isLoggedIn = JSON.parse(isLoggedIn)
    window.location.href = `/home/${isLoggedIn._id}`;
  }  
  if(!isLoggedIn){
    return (
      <div>
        <FirstTime/>
      </div>
    );
  }
}
