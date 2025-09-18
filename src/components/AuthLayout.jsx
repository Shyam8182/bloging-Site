import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

  export default function AuthLayout({childern,authentication = true}) {
  
    const nav = useNavigate()
    const [loder , setLoder] = useState(true)
    const authStatus = useSelector(state=> state.authStatus)

    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            nav("/login")

        }else if(!authentication && authStatus !==authentication){
            nav("/")
        }
        setLoder(false)

    },[authStatus,nav,authentication])
    return loder ? <h1>loding...</h1>:<>{childern}</>
}


