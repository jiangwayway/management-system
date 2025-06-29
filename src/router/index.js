import { createBrowserRouter, Navigate } from "react-router-dom"
import { Main } from "../pages/Main"
import { Home } from "../pages/Home"
import { Mall } from '../pages/Mall'
import { User } from '../pages/User'
import { PageOne } from '../pages/other/PageOne'
import { PageTwo } from '../pages/other/PageTwo'

const routes = [
  {
    path: '/',
    Component: Main,
    children: [

      {
        path: 'home',
        Component: Home
      },
      {
        path: 'mall',
        Component: Mall,
      },
      {
        path: 'user',
        Component: User,
      },
      {
        path: 'other',
        children: [
          {
            path: 'pageOne',
            Component: PageOne
          },
          {
            path: 'pageTwo',
            Component: PageTwo
          }
        ]
      },
      {
        path: '/',
        element: <Navigate to='home' replace />
      },
    ]
  }
]
export default createBrowserRouter(routes)