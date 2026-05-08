
export interface SummeryStrucutre
{
    title?: string
    description: string
    total: number
    pending: number
    completed: number
}



function SummeryProvider({completed, description, pending, title, total}:SummeryStrucutre) {
  return (
    <div>
        {title && title.length > 0 &&
        <div>
        <div className="flex justify-start">
          <div className="font-bold text-green-600 text-2xl italic ">{title}</div>
        </div>
        <br />
        </div>
        }
        
        <div style={{border: '2px solid green'}} className="rounded-2xl p-2">
        <div className="flex justify-center">
          <div className="font-semibold text-green-600 text-lg ">{description}</div>
        </div>
        
        <div  className="rounded-2xl shadow-md border-green-500 p-5 ">
            <div className="font-semibold text-green-600">Total <span className="text-black">{total}</span></div>
            <br />
            <div className="font-semibold text-green-600">Pending <span className="text-black">{pending}</span></div>
            <br />
            <div className="font-semibold text-green-600">Completed <span className="text-black">{completed}</span></div>
        </div>
        </div>
        
    </div>
  )
}

export default SummeryProvider