import React, {  useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import '../styles/signup.css'

function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/login",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <body className="body">
        <div className="signup">

          
            <div className="box5">
            <h1 className="signup1">Signup</h1>
            <form action="POST">
                <label>Email-ID</label>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <label>password</label>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                
             
                <button  onClick={submit} id="submit">Submit</button>
            </form>

           
            <p>OR</p>
          

            <Link to="/login"><button id="button1">Login</button></Link>
            </div>
        </div>
        </body>
    )
}

export default Login