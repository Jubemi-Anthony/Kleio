import { faBell } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Header = () => {
  return (
    <header className="flex fixed items-center justify-between px-[3%] mx-auto pt-4 pb-2 border-b border-army w-full bg-bright">
        <div className="w-14">
            <img className="w-full" src="https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/boy_people._avatar_man_male_teenager_user_-64.png" alt="boy" />
        </div>
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