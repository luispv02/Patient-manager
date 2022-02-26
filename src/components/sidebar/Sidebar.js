import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { hiddenMenu } from '../../actions/sidebar';
import SidebarMenu from './SidebarMenu'

const Sidebar = () => {

  const dispatch = useDispatch()
  const {showMenu} = useSelector(state => state.sidebar);

  const handleHiddenMenu = () => {
    dispatch(hiddenMenu())
  }

  return (
    <div className="sidebar">
      <div className={showMenu ? 'sidebar__content show-menu' : 'sidebar__content hidden-menu' }>
        <div className="sidebar__content__header">
          <h6>Dentista</h6>
          
          <a href="!#">Logout</a>
        </div>

        <div className="sidebar__content__menu">
          <SidebarMenu />
        </div>

        <div className="sidebar__content__icon-arrow">
          <i 
            className="fa-solid fa-arrow-up"
            onClick={handleHiddenMenu}
          ></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar