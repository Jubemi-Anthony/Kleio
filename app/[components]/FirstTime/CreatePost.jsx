import { faCamera, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

const CreatePost = ({setCreate}) => {
    const [cats, setCats] = useState(['technology']);
  return (
    <section className="fixed top-[10%] bg-white shadow-2xl left-[5%] w-[90%] h-[70vh]">
        <div className="relative p-3">
            <FontAwesomeIcon onClick={()=> setCreate(false)} className="absolute top-3 text-2xl text-red-600 right-3" icon={faX}/>
            <div className='flex items-center gap-2 pb-1'>
                <img className='w-14 rounded-full' src="https://cdn3.iconfinder.com/data/icons/avatar-154/1091/boy3-64.png" alt="profile picture" />
                <div className='w-full'>
                    <p className='text-dark font-bold text-xl'>Jubemi Anthony</p>
                    <p className='text-grey font-semibold'>@jubemi_anthony</p>
                </div>
            </div>
            <form className=" flex flex-col">
                <textarea className="mt-4 text-lg outline-army p-2 font-semibold border-b-2 border-army" placeholder="What's on your mind?" name="post" cols="30" required maxLength={250} rows="10"/>
                <div className="flex flex-wrap gap-2">
                    <p className="text-lg text-army font-semibold">Categories:</p>
                    {
                        cats.map((cat)=>(
                            <p className="text-md font-semibold capitalize flex items-center gap-1" key={cat}>{cat},</p>
                        ))
                    }
                </div>
                <div className="mt-4 border p-2 rounded-md border-army flex items-center gap-2">
                    <label className="text-lg text-army font-semibold" for="categories">Select a category:</label>
                    <select onChange={(e)=> cats.push(e.target.value)} id="categories" name="categories">
                        <option value="tech">Technology</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="sports">Sports</option>
                        <option value="news">News</option>
                        <option value="travel">Travel</option>
                        <option value="education">Education</option>
                        <option value="health">Health</option>
                        <option value="science">Science</option>
                        <option value="food">Food</option>
                        <option value="finance">Finance</option>
                        <option value="fashion">Fashion</option>
                        <option value="gaming">Gaming</option>
                        <option value="art">Art</option>
                        <option value="music">Music</option>
                        <option value="automotive">Automotive</option>
                        <option value="books">Books</option>
                        <option value="movies">Movies</option>
                        <option value="politics">Politics</option>
                        <option value="nature">Nature</option>
                    </select>
                </div>
                <div className="mt-3 flex items-center gap-1">
                    <input id="file" type="file" />
                    <label htmlFor="file"><FontAwesomeIcon className="text-2xl text-army" icon={faCamera}/></label>
                </div>
                <button className="bg-army mt-5 text-xl font-semibold text-white p-2">Post</button>
            </form>
        </div>
    </section>
  )
}

export default CreatePost