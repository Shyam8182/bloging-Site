import React,{useCallback, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import CButone from './CButone'
import Input from './Input'
import Selactor from './container/Selactor'
import RTE from './RTE'
import servises from '../appwrite/config'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'



function PostForm({post}) {



    const {register,handleSubmit,watch,setValue,control,getValues} = useForm({
        defaultValues:{
            title:post?.title || '',
            slug:post?.slug||'',
            content:post?.status ||'active',
             status: post?.status || "active",
        }
    })



    const nav = useNavigate()
    const userData = useSelector(state=> state.auth.userData)
    // console.log("aa sotr na user data",userData);
    

let usernuid = userData ? userData.$id :null
console.log("aa user nu id chee",usernuid);




      const submitForm = async (data)=>{
      console.log(" from Post Form ", data);
      
      if(post){
        const file = data.image[0] ? await servises.uplodeFile(data.image[0]) :null
        if(file){
          servises.deleteFile(post.fetucherImage)
        }
        const dbPost = await servises.updatePost(
          post.$id,{
            ...data,
            fetucherImage: file ? file.$id : undefined
          })
          if (dbPost) {
            nav(`/post/${dbPost.$id}`)
          }
      }else{
      const file = data.image && data.image[0] ? await servises.uplodeFile(data.image[0]) : null;
       
        if(file){
          const fileId = file.$id
          // data.feturedimage = fileId
          // console.log("after image addd ",data);
          
          const dbPost = await servises.creatPost({
            ...data,
            feturedimage:fileId,
            tital:data.title,
            uerid:usernuid

          })
          // console.log("aa db post chheeee ",dbPost);
          
          if (dbPost) {
            nav(`/post/${dbPost.$id}`)
          }

        }


      }
     
    }

    const slugTranform = useCallback((value)=>{
  
      if (value && typeof(value) == 'string') 
        return value
        .toLowerCase()
        .trim()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
      
      return ''
    },[])


    useEffect(()=>{

      const subscition = watch((value,{name})=>{
        if (name == 'title') {
          setValue('slug',slugTranform(value.title,{shouldValidate:true}))
        }

      })

      return ()=>{
        subscition.unsubscribe()
      }
    },[watch,setValue,slugTranform])



  return (
  <form onSubmit={handleSubmit(submitForm)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTranform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={servises.getFilePriweu(post.fetucherImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Selactor
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <CButone type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full" childern={post ? "Update" : "Submit"}>
                  
                </CButone>
                {/* <button className='inline-block py-2 bg-blue-500 text-white w-full rounded '
                  type='submit'
                >
                  {post ? "Update" : "Submit"}
                </button> */}
            </div>
        </form>
  )
}

export default PostForm
