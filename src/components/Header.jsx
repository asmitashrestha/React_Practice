import { Link } from 'react-router-dom'

const Header = () => {
    return (
    <div>
         <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>

                    </ul>
                </nav>
            
            <hr />
    </div>
        
            
               
       
    )
}

export default Header
