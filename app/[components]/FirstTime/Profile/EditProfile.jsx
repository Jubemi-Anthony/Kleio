import { faLock, faMessage, faPen, faPerson } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const EditProfile = ({item, icon,editMe}) => {
  return (
    <div onClick={()=> editMe(item)} className="flex rounded-md gap-3 mb-5 bg-white p-3 w-full justify-start items-center">
        <FontAwesomeIcon className="text-army text-2xl" icon={icon}/>
        <p className="flex text-2xl font-semibold text-grey w-full justify-between items-center">
            {item}
            <FontAwesomeIcon className="text-grey" icon={faPen}/>
        </p>
    </div>
  )
}

export default EditProfile