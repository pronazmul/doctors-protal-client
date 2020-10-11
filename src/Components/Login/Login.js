import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useForm } from "react-hook-form"
import { handleFacebookSignIn, handleGoogleSignIn, initializeFirebase, createUser, signInEmailPass } from './FirebaseAuth';

initializeFirebase()

const Login = () => {
    document.title='LOGIN'
    const [accState, setAccState] = useState(true)

    // Mannage Login Resistration...... 
    	const { register, handleSubmit, errors } = useForm();
        const onSubmit = data => { 
            if(!accState){
                createUser(data.email, data.password, data.name)
                .then(message =>{ 
                    alert("Account Created Successfully")
                    setAccState(true)
                })
                .catch(error => alert(error))
            }
                
            if(accState){
                signInEmailPass(data.email, data.password)
                .then(res => {
                    console.log(res)
                    // setLoggedInUser(res)
                    // history.replace(from)                    
                })
                .catch(error => alert(error))
                
            }
         }
    
    //Mannage Google Sign in...
    const googleLogin =() =>{
        handleGoogleSignIn()
        .then(result => {
            console.log(result)
            // setLoggedInUser(result)
            // history.replace(from) 
        })
    } 

    //Mannage Facebook Sign in...
    const facebookLogin = () =>{
        handleFacebookSignIn()
        .then(result => {
            console.log(result)
            // setLoggedInUser(result) 
            // history.replace(from)             
        })
        
    }

    
    return (
        <div className="container-fluid login-bg">
            <Navbar></Navbar>
            <div className="row h-75 d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <div className="card shadow border-0 py-4 px-3">
                    { accState ?
                        <>
                            <h3 className='text-center textColor1 font-weight-bold mb-3'>Login Now</h3>
                            <form className="" onSubmit={handleSubmit(onSubmit)}>
                                <input ref={register({ required: true })} name='email' placeholder='Email' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="email"/>
                                {errors.email && <span className="text-danger">* Required</span>}
                                <input ref={register({ required: true })} name='password' placeholder='Password' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="password"/>
                                {errors.password && <span className="text-danger">* Required</span>}
                                <Link className='textColor1 bold d-block mt-3' onClick={()=>setAccState(!accState)}>Create An account</Link>
                                <button type='submit' className='btn btn-block bgGradient my-4'>Login</button>
                            </form>
                        </>
                     :
                        <>
                            <h3 className='text-center textColor1 font-weight-bold mb-3'>Create Account</h3>
                            <form className="" onSubmit={handleSubmit(onSubmit)}>
                                <input ref={register({ required: true })} name='name' placeholder='Name' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="text"/>
                                {errors.name && <span className="text-danger">* Required</span>}
                                <input ref={register({ required: true })} name='email' placeholder='Email' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="email"/>
                                {errors.email && <span className="text-danger">* Required</span>}
                                <input ref={register({ required: true })} name='password'  placeholder='Password' className='form-control mt-3 border-top-0 border-left-0 border-right-0' type="password"/>
                                {errors.password && <span className="text-danger">* Required</span>}
                                <Link className='textColor1 bold d-block mt-3' onClick={()=>setAccState(!accState)}>Already Have An Account</Link>
                                <button type='submit' className='btn btn-block bgGradient my-4'>Registration</button>
                            </form>
                        </>
                      }
                      
                      <div className="btn-group" role="group" aria-label="Basic example">
                                <button onClick={googleLogin} type="button" className="btn textColor1"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Google Sign In</button>
                                <button onClick={facebookLogin} type="button" className="btn textColor1"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Facebook Sign In</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;