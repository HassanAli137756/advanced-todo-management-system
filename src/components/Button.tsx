
interface ButtonProps
{
    name: string
    classes?: string
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => void

}


function Button({classes, onClick, type, name}:ButtonProps)
{


  return(
    <div>
        <button
        onClick={() => onClick ? onClick() : null}
        className={`rounded-2xl p-2 font-bold bg-blue-700 text-2xl ${classes}`}
        type={type && type.length > 0 ? type : 'button'}
        >
            {name}
        </button>
    </div>
  )
}

export default Button