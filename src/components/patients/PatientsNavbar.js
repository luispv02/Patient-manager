import React from 'react'
import { useDispatch } from 'react-redux'
import { openMenu } from '../../actions/sidebar';

const PatientsNavbar = () => {

  const dispatch = useDispatch();

  const handleShowMenu = () => {
    dispatch(openMenu())
  }


  return (
    <div className="patients__navbar">
      <div className="patients__navbar__content">
        <h5>{new Date().getTime()}</h5>

        <i 
          className="fa-solid fa-bars-staggered"
          onClick={handleShowMenu}
        ></i>
      </div>
    </div>
  )
}

export default PatientsNavbar