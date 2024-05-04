'use client'
import { faAngleDoubleRight, faRightLong} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState } from 'react'

const FirstTime = () => {
    const [num, setNum] = useState(1);
  return (
    <div className='bg-army h-screen text-center'>
        <div className='flex pt-12 flex-col items-center justify-center h-5/6'>
            <div className='text-white text-4xl flex flex-col gap-4'>
                <p onClick={()=> setNum(1)} className={num == 1 ? 'selectedPara' : ''}>Be Receptive</p>
                <p onClick={()=> setNum(2)} className={num == 2 ? 'selectedPara' : ''}>Be Connected</p>
                <p onClick={()=> setNum(3)} className={num == 3 ? 'selectedPara' : ''}>Be Impactful</p>
            </div>
        </div>
        {
            num < 3 ?
            <button onClick={()=> setNum(num + 1)} className='bg-dark w-3/4 mx-auto text-3xl py-2 px-3 rounded-2xl flex items-center justify-center gap-1 text-white'>
            Get Started
            <FontAwesomeIcon className='text-white' icon={faRightLong}/>
        </button> :
        <Link href='/register'>
            <p className='bg-dark w-3/4 mx-auto text-3xl py-2 px-3 rounded-2xl flex items-center justify-center gap-1 text-white'>
                Get Started
                <FontAwesomeIcon className='text-white' icon={faAngleDoubleRight}/>
            </p>
        </Link>
        }
    </div>
  )
}

export default FirstTime