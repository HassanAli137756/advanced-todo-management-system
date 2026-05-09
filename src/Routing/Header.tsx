import { NavLink } from "react-router"

interface Link
{
  name: string
  path: string
}


function Header()
{
  const links:Link[] = [
  {
    name: 'All-Todos',
    path: '/'
  },
  
  {
    name: 'Add-Todo',
    path: '/addtodo'
  },

  {
    name: 'Todos-Summery',
    path: '/summery'
  },

  {
    name: 'Todo-Search',
    path: '/searchengine'
  },

  {
    name: 'Contact-Me',
    path: '/contact'
  },

  {
    name: 'Logout',
    path: '/logout'
  }

  ]

  return (
    <div>
      <div className="flex justify-between text-white p-6 bg-gray-950 pl-2 pr-2  ">
        {
          links.map(link =>
          {
            return(
            <div key={link.name}>
              <NavLink
              to={link.path}
              className={({isActive}) => `font-bold text-xl gap-2 ${isActive ? 'text-green-400' : ''}  `}
              >
                {link.name}
              </NavLink>
            </div>
            )
          }
          )
        }
      </div>
    </div>
  )
}

export default Header