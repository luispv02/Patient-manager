import React from 'react'
import { Link } from 'react-router-dom'

const SidebarMenu = () => {
  return (
    <div className="sidebar__menu">
      <nav>
        <ul>
          <li>
            <Link to='/'>Pacientes</Link>
          </li>
          <li>
            <Link to='/add'>Agregar Paciente</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SidebarMenu