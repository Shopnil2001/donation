import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Result } from "postcss";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {
    
    const links = <>
        <li className="mr-2"><NavLink to={'/'}>Home</NavLink></li>        
        <li><NavLink to={'/MyEvents'}>My Events</NavLink></li>
        <li><NavLink to={'/Blog'}>Blog</NavLink></li>
        

    </>
   
    const {user, LogOut, googleSignIn } = useContext(AuthContext)
   


    const handleGSignIn = () =>{
        const provider = new GoogleAuthProvider();

        googleSignIn(provider)
        .then(Result=>{
           console.log(Result);
           toast('sign in with google successful')
        })
        .catch()
    }


    const handleSignOut =()=>{
        LogOut()
        .then()
        .catch()

    }
    return (
        <div className="navbar bg-base-100 mb-8 mt-5 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case font-bold text-2xl">E-Management</a>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">

               {
                user ? <div className="lg:flex items-center gap-2">
                    <img className="rounded-full w-10" src={user.photoURL} alt="" />
                    <p>{user.email}</p>
                    <button onClick={handleSignOut} className="btn btn-outline btn-primary">SignOut</button>
                </div>
                :
                <div>
                    <button onClick={handleGSignIn} className="btn btn-outline btn-success mr-2" >Google SignIn </button>
                    <NavLink className={'btn btn-outline btn-error'} to={'/Login'} >Login</NavLink>
                </div>
               }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;