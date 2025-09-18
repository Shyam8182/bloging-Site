
import './App.css';
import config from '../src/conf/conf';
import { useState , useEffect} from 'react';
import { useDispatch } from 'react-redux';
import authServise from './appwrite/auth';
import { logout,login } from './stor/authSlieses';
import Heder from './components/Heder';
import Foter from './components/Foter';
import {Outlet} from 'react-router-dom'


function App() {
 const [loding , setLoding] = useState(true);
 const dispatch  = useDispatch()

 useEffect(() => {
    authServise.getCurentUSer()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoding(false))

 },[])

return !loding ?
<div className='min-h-screen flex flex-wrap content-between bg-gray-800 text-white font-roman font-semibold'>
      <div className='w-full block'>
      <Heder/>
        <main>
        TODO:  <Outlet />
        </main>
        <Foter />
      </div>
    </div>


: <h1>Loading...</h1>
}

export default App

