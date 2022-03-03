import moment from 'moment';
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
        <h5>{moment(new Date()).format('dddd, LL')}</h5>

        <i 
          className="fa-solid fa-bars-staggered"
          onClick={handleShowMenu}
        ></i>
      </div>
    </div>
  )
}

export default PatientsNavbar