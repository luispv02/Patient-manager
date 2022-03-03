import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { hiddenMenu } from '../../actions/sidebar'

const SidebarMenu = () => {

  const dispatch = useDispatch()

  return (
    <div className="sidebar__menu">
      <nav>
        <ul>
          <li>
            <NavLink to='/' onClick={() => dispatch(hiddenMenu())}>Patients</NavLink>
          </li>
          <li>
            <NavLink to='/add' onClick={() => dispatch(hiddenMenu())}>Add patients</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SidebarMenu