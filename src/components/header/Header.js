import React from 'react'
import {FasSignAlt ,FaSignOutAlt,FaUser, FaSignInAlt} from "react-icons/fa";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to="/">DashBoard</Link>
        </div>
        <ul>
            <li>
                <Link to="/login"><FaSignInAlt/>Login</Link>
            </li>
            <li>
                <Link to="/signup"><FaUser/>SignUp</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header