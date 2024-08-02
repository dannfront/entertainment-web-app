import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Layouts from "./layouts/Layouts"
import Series from "./pages/Series"
import Movies from "./pages/Movies"
import Bookmarks from "./pages/Bookmarks"

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layouts/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/movies",
        element:<Movies/>

      },
      {
        path:"/series",
        element:<Series/>
      },
      {
        path:"/bookmarks",
        element:<Bookmarks/>
      }
    ]

  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
