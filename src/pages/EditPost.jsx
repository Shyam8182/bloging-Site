import React,{useState,useEffect} from 'react'
import Container from '../components/container/Container'
import PostForm from '../components/PostForm'
import servises from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post , setPost] = useState([])
    const {slug} = useParams()
    const nav = useNavigate()

    useEffect(()=>{

        if (slug) {
            servises.getPost(slug).then((posts)=>{
                if (posts) {
                    setPost(posts)
                }
            })
        }else{
                nav('/')
        }

    },[slug,nav])
  return post ?(
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ):null
}

export default EditPost
