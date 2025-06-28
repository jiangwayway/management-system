import { createBrowserRouter } from "react-router-dom"
import { Main } from "../pages/Main"
import { Home } from "../pages/Home"

const routes = [
  {
    path: '/',
    Component: Main,
    children: [
      {
        path: '/home',
        Component: Home
      }
    ]
  }
]
export default createBrowserRouter(routes)