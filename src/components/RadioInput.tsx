

interface InputProps
{
    label: string
    name: string
    value: string
    onChange: (value: string) => void
}


function RadioInput({label, value, name, onChange}:InputProps)
{
  
  

  return(
    <div>
        
        <label
        className="font-bold text-lg">
            <input 
            type="radio"
            checked = {value == label}
            name={name}
            onChange={() =>  onChange(label)}
            />
            &nbsp;{label}

        </label>
    </div>
  )
}

export default RadioInput