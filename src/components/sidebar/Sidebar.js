import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { hiddenMenu } from '../../actions/sidebar';
import SidebarMenu from './SidebarMenu'

const Sidebar = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => [state.auth.name, state.sidebar.showSidebar])
  const name = state[0];
  const showSidebar = state[1];


  const handleHiddenMenu = () => {
    dispatch(hiddenMenu())
  }

  const handleLogout = () => {
    dispatch(startLogout());
    dispatch(hiddenMenu());
  }

  return (
    <div className="sidebar">
      <div className={showSidebar ? 'sidebar__content show-menu' : 'sidebar__content hidden-menu' }>
        <div className="sidebar__content__header">
          <h6>{name}</h6>
          <button 
            onClick={handleLogout}
          >Logout</button>
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