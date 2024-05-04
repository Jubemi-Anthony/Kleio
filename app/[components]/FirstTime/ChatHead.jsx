import Link from "next/link";

const ChatHead = () => {
    let p = "Hi babe! I'm coding right now.";
    p = p.slice(0,12);
  return (
    <Link href='/message'>
        <div className="flex gap-2 mb-4 bg-white p-2 rounded">
            <div className="w-14">
                <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/afro_avatar_male_man-64.png" alt="profile pic" />
            </div>
            <div className="w-full">
                <p className="font-semibold text-xl text-dark">Jubemi Pajiah</p>
                <div className="flex justify-between items-center">
                    <p className="text-ash">{p}...</p>
                    <p>23:53</p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default ChatHead