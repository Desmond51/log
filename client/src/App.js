import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';


// Import all components
import Username from './componenents/Username'
import Profile from './componenents/Profile';
import Recovery from './componenents/Recovery';
import Register from './componenents/Register';
import Password from './componenents/Password';
import Reset from './componenents/Reset';
import PageNotFound from './componenents/PageNotFound';


// root routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <Username>Root Route</Username>
    },
    {
        path: '/register',
        element: <Register>Root Route</Register>
    },
    {
      path: '/password',
      element: <Password>Root Route</Password>
  },
  {
    path: '*',
    element: <PageNotFound>Root Route</PageNotFound>
},
{
  path: '/reset',
  element: <Reset>Root Route</Reset>
},
{
  path: '/recovery',
  element: <Recovery>Root Route</Recovery>
},
{
  path: '/profile',
  element: <Profile>Root Route</Profile>
}
])
export default function App() {
  return (
    <main>
        <RouterProvider router = {router}></RouterProvider>
        
  
    </main>
  )
}
