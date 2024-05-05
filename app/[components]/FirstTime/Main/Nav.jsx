import { faFire, faHome, faMessage, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex fixed bottom-0 w-full py-3 border-t border-army bg-bright justify-between px-3 items-center">
        <Link href='/'>
            <div className="flex text-base font-bold flex-col items-center">
                <FontAwesomeIcon className="text-lg" icon={faHome}/>
                Home
            </div>
        </Link>
        <Link href='/search'>
            <div className="flex text-base font-bold flex-col items-center">
                <FontAwesomeIcon className="text-lg" icon={faSearch}/>
                Search
            </div>
        </Link>
        <Link href='/'>
            <div className="flex text-base font-bold flex-col items-center">
                <FontAwesomeIcon className="text-2xl bg-army text-white p-3 rounded-full" icon={faPlus}/>
            </div>
        </Link>
        <Link href='/topics'>
            <div className="flex text-base font-bold flex-col items-center">
                <FontAwesomeIcon className="text-lg" icon={faFire}/>
                Topics
            </div>
        </Link>
        <Link href='/chats'>
            <div className="flex text-base font-bold flex-col items-center">
                <FontAwesomeIcon className="text-lg" icon={faMessage}/>
                Chats
            </div>
        </Link>
    </nav>
  )
}

export default Nav