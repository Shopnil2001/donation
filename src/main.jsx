import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root/Root';
import Home from './Home/Home';

import Services from './Services/Services';

import ServiceDetail from './Services/ServiceDetail';
import MyEvents from './MyEvents/MyEvents';
import Login from './Log&Reg/Login';

import Register from './Log&Reg/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRout from './Private/PrivateRout';
import ErrorPage from './Error/ErrorPage';
import Blog from './Extra/Blog';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/Blog",
        element:<PrivateRout><Blog></Blog></PrivateRout>
     

      },
      {
        path:"/Service/:id",
        loader: ()=>fetch('/Service.json'),
        element:<PrivateRout><ServiceDetail></ServiceDetail></PrivateRout>
        


      },
      {
        path:"/MyEvents",
        loader: ()=>fetch('/Service.json'),
        element:<PrivateRout><MyEvents></MyEvents></PrivateRout>
        
      },
      {
        path:"/Login",
        element:<Login></Login>
        
      },
      {
        path:"/Register",
        element:<Register></Register>
      },
     




      



    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
         <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);