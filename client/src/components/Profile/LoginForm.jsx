import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

const LoginForm = () => {
    const [error , setError] = useState(false)
    const [email , setEmail] = useState(false)
    const [password , setPassword] = useState(false)

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        console.log("handle")

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate("/profile")
                // ...
            })
            .catch((error) => {
                setError(true)
            });
    }

    return (
        <form onSubmit={handleLogin}>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card sm:w-[30rem] shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" onChange={e=>setPassword(e.target.value)}/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-4 rounded-full">Login</button>
        </div>
        {error && <span>Incorrect email or password!</span>}
      </div>
    </div>
  </div>
</div>
</form>
    );
};

export default LoginForm;