import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import InputProfileEdit from "./InputProfileEdit"

const EditModal = ({setEdit, editItem}) => {
  return (
    <section className="fixed top-[5%] bg-white shadow-2xl left-[5%] w-[90%] h-[70vh]">
        <div className="relative p-3">
            <FontAwesomeIcon onClick={()=> setEdit(false)} className="absolute top-3 text-2xl text-red-600 right-3" icon={faX}/>
            <p className='text-dark font-bold text-xl'>Edit {editItem}</p>
            <form className=" flex flex-col">
                <InputProfileEdit access={editItem === 'Full Name'} placeholder={'Full Name'}/>
                <InputProfileEdit access={editItem === 'Bio'} placeholder={'Bio'}/>
                <InputProfileEdit access={editItem === 'Email'} placeholder={'Email'}/>
                <InputProfileEdit access={editItem === 'User Name'} placeholder={'User Name'}/>
                <InputProfileEdit access={editItem === 'Password'} placeholder={'Password'}/>
                <button className="bg-army mt-5 text-xl font-semibold text-white p-2">Edit</button>
            </form>
        </div>
    </section>
  )
}

export default EditModal