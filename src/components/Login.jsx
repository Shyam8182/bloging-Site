import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Logo from './Logo'
import Input from './Input'
import CButone from './CButone'
import {useDispatch} from 'react-redux'
import {login as authLog} from '../stor/authSlieses'
import  authServise from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {

    const despach = useDispatch()
    const nav =  useNavigate()
    const {register,handleSubmit} = useForm()
    const [error , setError] = useState(null)

    const login = async(data)=>{
        console.log(data);
        
        setError("")

        try {
            const sessons = await authServise.login(data)
            console.log(sessons);
            
            if(sessons){
                const user  = await authServise.getCurentUSer()
                console.log("curent user : " ,user);
                
                if (user) {
                    despach(authLog(user))
                    nav("/")
                }
            }
            

        } catch (error) {
            setError(error)
            
        }
    }


  return (
     <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-700 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
          <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
             <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>

         {/* {error && (
                    <p className='text-red-600 mt-8 text-center'>
                        {typeof error === 'string' ? error : error.message || "Something went wrong"}
                    </p>
                )} */}

          <form onSubmit={handleSubmit(login)}>
            <div className='space-y-5'>
                <Input
                label="Email"
                 placeholder="Enter your email"
                 type = "email"
                 {...register("email",{
                    required:true,
                    validate:{
                       matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",   
                    }
                 })}
                />
                <Input
                label="Password:"
                placeholder="Entar Paswood"
                type="password"
                 {...register("password",{
                    required:false,
                    
                 })}
                />

                <CButone
                type="submit"
                className="w-full"
                childern={"Login"}
                ></CButone>
            </div>
          </form>
        </div> 
    </div> 
  )
}

export default Login
