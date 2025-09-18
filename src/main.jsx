import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'  
import store  from './stor/Store.js'
import { createBrowserRouter } from 'react-router'
import Home from './pages/Home.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import PageLogin from './pages/PageLogin.jsx'
import PageSineup from './pages/PageSineup.jsx'
import AllPost from './pages/AllPost.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'
import { RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/login",
        element:(
          <PageLogin/>
          // <AuthLayout authentication>
          //   <PageLogin/>
          // </AuthLayout>

        )
      },
    
       {
        path:"/signup",
        element:(
          <PageSineup/>
          // <AuthLayout authentication>
          //   <PageSineup/>
          // </AuthLayout>
        )
      },
       {
        path:"/all-posts",
        element:(
          // <AuthLayout authentication>
          //   {" "}
            <AllPost/>
          // </AuthLayout>
        )
      },
       {
        path:"/add-post",
        element:(
          // <AuthLayout authentication>
          //   {" "}
            <AddPost/>
          // </AuthLayout>
        )
      },
       {
        path:"/all-post/:slug",
        element:(
          // <AuthLayout authentication>
          //   {" "}
            <EditPost/>
          // </AuthLayout>
        )
      },
      {
        path:"/post/:slug",
        element:<Post/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  </StrictMode>,
)
