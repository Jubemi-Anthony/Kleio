
const InputProfileEdit = ({placeholder, access, value, onChange}) => {
  return (
    <div>
        <input onChange={(e)=>onChange(e)} value={value || ''} readOnly={!access} className={!access ? 'mt-4 w-full text-lg outline-army p-2 font-semibold border border-army' : `mt-4 w-full text-lg ${'outline-red-700'} p-2 font-semibold border ${'border-red-700'}` } placeholder={placeholder} required minLength={5} />
        {placeholder === 'Password' &&
        <input readOnly={!access} className={!access ? 'mt-4 w-full text-lg outline-army p-2 font-semibold border border-army' : `mt-4 w-full text-lg ${'outline-red-700'} p-2 font-semibold border ${'border-red-700'}` } placeholder={'Confirm Password'} required />
        }
    </div>
)
}

export default InputProfileEdit