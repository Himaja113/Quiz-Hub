import { Link } from "react-router-dom";
import React from "react";


import "../styles/home.css";

function Home() {

  return (
    <body>
      <div>
        <header>
          <nav>
            <ul class="nav">
              <li>
                <h2>QuizHUB</h2>
              </li>
             
             
              <li> <a href="">Home</a> </li>
               
             
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              
            </ul>
          </nav>
        </header>

        <main>
          <div class="body">
            <div class="intro">
              Welcome to our website dedicated to web development
              frontend-related quizzes! Whether you're a beginner looking to
              test your knowledge or an experienced developer seeking a
              challenge, you've come to the right place. Our quizzes cover a
              wide range of topics including HTML, CSS, JavaScript, frameworks
              like React and Angular, responsive design, and more.
            </div>
            <br />
            <div class="boxes">
              <div class="box1">
                <ul>
                  <li>
                    Diverse Topics: Our quizzes cover everything from basic
                    concepts to advanced techniques in frontend development.
                  </li>
                  <li>
                    Interactive Experience: Engage with our interactive quizzes
                    designed to enhance your learning experience.
                  </li>
                  <li>
                    Test Your Skills: Put your knowledge to the test and see how
                    you stack up against your peers.
                  </li>
                  <li>
                    Learn and Grow: Use our quizzes as a tool for
                    self-assessment and continuous improvement in your frontend
                    development journey.
                  </li>
                </ul>
              </div>
              <div class="box2">
                <Link to="/login" className="login2">
                  <button className="login2">LOGIN</button>
                </Link>
              </div>
            </div>
            <span>
             
            </span>
          </div>
          
        </main>
        <footer>
          <div class="foot"></div>
        </footer>
      </div>
    </body>
  );
}

export default Home;
