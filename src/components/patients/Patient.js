import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addEditPatient, startDeletePatient } from '../../actions/patients'

const Patient = ({name,tel, date, time, reason, id}) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(startDeletePatient(id))
  }


  const handleEdit = () => {
    dispatch(addEditPatient({name,tel,date,time,reason,id}))
  }

  return (
    <tr>
        <td>{name}</td>
        <td>{tel}</td>
        <td>{date}</td>
        <td>{time}</td>
        <td>{reason}</td>
        <td>
            <Link to='/edit'>
              <i 
                className="fa-solid fa-pen-to-square"
                onClick={handleEdit}
              ></i>
            </Link>
        </td>
        <td>
            <i 
              className="fa-solid fa-xmark"
              onClick={handleDelete}
            ></i>
        </td>
    </tr>
  )
}

export default Patient