import React, {  useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import '../styles/login_signup.css'


function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/quiz", { state: { id: email } });
          } else if (res.data === "notexist") {
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <body id="body">
    <div id="container10">
      <div className="box5">
        <h1 className="login1">Login</h1>
       <div id="email" >
        <form action="POST">
          <div className="mail">
            <label for="email-id">Email-ID:</label>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
          </div>
          <div className="pwd">
            <label for="password">Password:</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
          </div>
          <div className="checkbox">
            <a href="" id="forgot_pwd">
              forgot password?
            </a>
          </div>
    
          <button id="submit" onClick={submit}>Login</button>
        </form>

        
        <p>OR</p>
       

       <Link to="/signup"> <button id="button1">Signup</button></Link>
        </div>
      </div>
    </div>
    </body>
  );
}

export default Login;