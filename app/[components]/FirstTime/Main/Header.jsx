"use client";
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useSession } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const {status, data: session} = useSession();
  return (
    <header className="flex fixed items-center justify-between px-[3%] mx-auto pt-4 pb-2 border-b border-army w-full bg-bright">
        <Link href='/profile'>
          <div className="w-14">
              <img className="w-full rounded-full" src={session?.user?.image} alt="boy" />
          </div>
        </Link>
        <div className="w-16">
            <img className="w-full" src="/kleio2.png" alt="logo" />
        </div>
        <Link href='/notification'>
          <FontAwesomeIcon className="w-16 text-4xl" icon={faBell}/>
        </Link>
    </header>
  )
}

export default Header