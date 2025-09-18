import React from 'react'
import { useDispatch } from 'react-redux'
import authServise from '../appwrite/auth'
import { logout } from '../stor/authSlieses'


function Logout() {
    const dispatch = useDispatch()
    const logoutHendler = ()=>{
        authServise.logout()
        .then(()=>{
            dispatch(logout())
        })
    }

  return (
   <button className='inline-block px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 duration-200' onClick={logoutHendler}>
     Logout
   </button>
  )
}

export default Logout
