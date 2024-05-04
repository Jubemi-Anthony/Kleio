'use client'
import { faCamera, faHandPointRight, faLeftLong} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Message = () => {

// Function to generate a random chat between two users
function generateChat(numMessages) {
    const user1Messages = ["Hello!", "How are you?", "What's new?", "Let's meet up!", "See you later!", "Hey, how's it going?",
    "Pretty good, and you?",
    "Not bad, just been busy with work.",
    "Same here, it's been hectic.",
    "Any plans for the weekend?",
    "Yeah, thinking about going hiking.",
    "Sounds fun! Where are you heading?",
    "Probably the national park. It's beautiful this time of year.",
    "Totally! I've been wanting to go there too.",
    "You should come along!",
    "Maybe, I'll see if I can make it.",
    "Let me know, the more, the merrier!",
    "Will do. I'll text you later.",
    "Cool, talk to you soon!",
    "Hey, did you see the game last night?",
    "Yeah, it was intense! Can't believe they won!",
    "I know, right? It was down to the wire.",
    "Totally, I'm glad I stayed up to watch it.",
    "Me too, it was worth it.",
    "Hey, do you know a good place for lunch?",
    "Yeah, there's a new café downtown. You should check it out.",
    "Oh, I heard about that place. Is it any good?",
    "Yeah, they have great sandwiches and salads.",
    "I'll give it a try. Thanks for the recommendation!",
    "No problem! Let me know what you think.",
    "Definitely, I will."];
    const user2Messages = ["Hi!", "I'm good, thanks!", "Not much, you?", "Sounds great!", "Bye for now!", "Hey, how's it going?",
    "Pretty good, and you?",
    "Not bad, just been busy with work.",
    "Same here, it's been hectic.",
    "Any plans for the weekend?",
    "Yeah, thinking about going hiking.",
    "Sounds fun! Where are you heading?",
    "Probably the national park. It's beautiful this time of year.",
    "Totally! I've been wanting to go there too.",
    "You should come along!",
    "Maybe, I'll see if I can make it.",
    "Let me know, the more, the merrier!",
    "Will do. I'll text you later.",
    "Cool, talk to you soon!",
    "Hey, did you see the game last night?",
    "Yeah, it was intense! Can't believe they won!",
    "I know, right? It was down to the wire.",
    "Totally, I'm glad I stayed up to watch it.",
    "Me too, it was worth it.",
    "Hey, do you know a good place for lunch?",
    "Yeah, there's a new café downtown. You should check it out.",
    "Oh, I heard about that place. Is it any good?",
    "Yeah, they have great sandwiches and salads.",
    "I'll give it a try. Thanks for the recommendation!",
    "No problem! Let me know what you think.",
    "Definitely, I will."];

    // List of users
    const users = ["User1", "User2"];

  const chat = [];
  for (let i = 0; i < numMessages; i++) {
    // Randomly select a user
    const user = users[Math.floor(Math.random() * users.length)];

    // Randomly select a message based on the user
    let message;
    if (user === "User1") {
      message = user1Messages[Math.floor(Math.random() * user1Messages.length)];
    } else {
      message = user2Messages[Math.floor(Math.random() * user2Messages.length)];
    }

    // Add the chat entry to the array
    chat.push({
      user,
      message,
    });
  }
  return chat;
}
  return (
    <main className="pt-[2vh] min-h-screen pb-11 bg-bright">
        <div className="flex items-center gap-3 bg-white fixed top-0 w-full py-4">
            <Link href='/chats'>
                <FontAwesomeIcon className="ml-6 text-army text-2xl" icon={faLeftLong}/>
            </Link>
            <div className="flex gap-2 items-center">
                <img className="w-10 h-10" src="https://cdn1.iconfinder.com/data/icons/family-avatar-solid-happy-party/1000/Asian_Male003-64.png" alt="profile pic"/>
                <div className="flex flex-col">
                    <p className="text-dark font-bold text-2xl">Jubemi Pajiah</p>
                    <p>Typing...</p>
                </div>
            </div>
        </div>
        <div className="w-11/12 mx-auto pt-20 pb-10 flex flex-col-reverse gap-3">
            {
                generateChat(25).map((ch)=>(
                    <div className={ch.user === 'User1' ? 'bg-army self-end text-white p-4 w-1/2 rounded-lg' : 'bg-white text-dark p-4 w-1/2 rounded-lg'} key={ch.message}>
                        <p className="text-lg">{`${ch.message}`}</p>
                        <p className="text-right text-xs">00:45</p>
                    </div>
                ))
            }
        </div>


        <div className="fixed bottom-0 bg-white w-full flex items-center gap-3 py-4 px-3">
            <div className="w-11/12 flex items-center border border-army p-2 rounded-md">
                <input className="w-full outline-none" type="text" placeholder="Send a message..."/>
                <FontAwesomeIcon className="text-army w-7 text-lg" icon={faHandPointRight}/>
            </div>
            <FontAwesomeIcon className="text-army text-lg" icon={faCamera}/>
        </div>
    </main>
  )
}

export default Message