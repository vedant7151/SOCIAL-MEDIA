/* eslint-disable no-unused-vars */
import React from 'react'
import './Nav.css'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart , AiOutlineUserAdd} from 'react-icons/ai'
const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" placeholder='Enter your search' className='search-input' />
      </div>
      <div className="profile-container">
        <a href="">
        <FiHeart className='nav-icons'/>
        </a>

        <a href="">
          <AiOutlineShoppingCart className='nav-icons'/>
        </a>
       
        <a href="">
          <AiOutlineUserAdd className='nav-icons'/>
        </a>
      </div>
    </nav>

  )
}

export default Nav