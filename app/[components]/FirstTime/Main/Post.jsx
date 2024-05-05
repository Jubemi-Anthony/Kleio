import { faMessage, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Post = () => {
    const generateImg = ()=>{
        const imgLinks = ['https://images.pexels.com/photos/6517147/pexels-photo-6517147.jpeg?auto=compress&cs=tinysrgb&w=400',
                            'https://images.pexels.com/photos/6517201/pexels-photo-6517201.jpeg?auto=compress&cs=tinysrgb&w=400'
        ];
        const select = [];
        let r = Math.ceil(Math.random()*4);
        for(let i=0; i<1; i++){
            select.push(imgLinks[Math.floor(Math.random() * imgLinks.length)]);
        }
        return select;
    }
  return (
    <div className='bg-white mb-5 p-2 rounded-md'>
        <div className='flex items-center gap-2 pb-1'>
            <img className='w-14 rounded-full' src="https://cdn3.iconfinder.com/data/icons/avatar-154/1091/boy3-64.png" alt="profile picture" />
            <div className='w-full'>
                <div className='flex justify-between items-center w-full'>
                    <p className='text-dark font-bold text-xl'>Jubemi Anthony</p>
                    <p>May 5th</p>
                </div>
                <p className='text-grey font-semibold'>@jubemi_anthony</p>
            </div>
        </div>
        <hr className='h-[2px] bg-army border-none w-5/6 mx-auto'/>
        <article className='my-2 font-sans text-justify'>
            {"Hello! Let's adopt a new way of learning especially for young kids. Parent's should believe more in themselves and encourage home learning!"}
        </article>
        <div className='flex flex-wrap gap-1'>
            {
                generateImg().map((im)=>(
                    <img key={Math.random()} src={im} alt="post" />
                ))
            }
        </div>
        <hr className='h-[1px] bg-army my-2 border-none w-5/6 mx-auto'/>
        <div className='flex gap-4'>
            <p className='text-lg font-semibold flex items-center gap-1'><FontAwesomeIcon className='text-army text-xl' icon={faThumbsUp}/>91</p>
            <p className='text-lg font-semibold flex items-center gap-1'><FontAwesomeIcon className='text-army text-xl' icon={faMessage}/>23</p>
        </div>
    </div>
  )
}

export default Post