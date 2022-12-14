import { FaUser } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/AuthForm.module.css";
import AuthContext from "@/context/AuthContext";



export default function LoginPage() {
const [email,setEmail]= useState('')
const [password,setPassword] = useState('')

const {login, error} = useContext(AuthContext)

useEffect(() => {error && toast.error(error)}); // must explicitly return with curly braces when using use effect

const handleSubmit = e => {
    e.preventDefault()
    console.log(error)
    login({email, password})
}

  return (
    <Layout title='User Login'>
      <div className={styles.auth}>
        <h1>
            <FaUser/> Login
        </h1>
        <ToastContainer/>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email Address</label>
                <input 
                type='email' 
                id='email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)} //sets email to the target value (whatever is typed in)
                />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input 
                type='password' 
                id='password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)} //sets password to the target value (whatever is typed in)
                />
            </div>
            <input type='submit' value='Login' className='btn'/>
        </form>
        <p>
           Don't have an account? <Link href='/account/register'>Register</Link> 
        </p>
      </div>

    </Layout>
  )
}

