import React,{useState,useEffect} from 'react'
import servises from '../appwrite/config'
import Container from '../components/container/Container'
import PostCard from '../components/container/PostCard'


function Home() {
    const [post ,setPost] = useState([])
    // useEffect( ()=>{
    //     servises.getAllPost([]).then((posts)=>{
    //         if (posts) {
    //             setPost(posts.documents)
    //             console.log("from home page ",post);
                
    //         }
    //     })
    // },[])

useEffect(()=>{
    servises.getAllPost([]).then((posts)=>{
      console.log("from home page ",posts);
      
        if(posts){
            setPost(posts.documents)
        }
    })
   },[])
 
    return post ? (  <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
               

                      {
                  post.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                <PostCard post={{...post}}/>
                    </div>
            ))
            }

                </div>
            </Container>
        </div>) : (<div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
//     if (post === null || post.length == 0 ) {
//          return (
            
//         )
//     }else{
//      return (
      
//     )

// }
}

export default Home
