
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from 'react';

const Login = () => {
    const {SignIn}= useContext(AuthContext)
    const [erMessage, setErMessage] =useState('')
    const location= useLocation();
    const navigate =useNavigate();
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        setErMessage('')

        SignIn(email, password)
        .then(result =>{
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
            toast('login successful')
        })
        .catch(error=>{
            setErMessage('please check email/password')
        } 

        )
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" placeholder='Login' />
                            </div>
                            
                        </form>
                        {
                            erMessage&& <p  className='text-red-500 ml-3'>{erMessage}</p>
                        }
                        <p className='ml-3 mb-3'>Do not have account? <Link  className='text-sky-600' to={'/Register'}>...Register</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;