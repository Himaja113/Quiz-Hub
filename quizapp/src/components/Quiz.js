import { Link } from "react-router-dom";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../styles/quizzes.css";

function Quiz() {
    const location = useLocation();

    return(
    
    <div class="quizzes">
            <div class="html">
              <div class="html1">
                <li>HTML</li>
                <li>Structured Learning</li>
              </div>
              <div class="html2">
                Our web development quizzes cover all the essentials, including
                HTML, CSS, and JavaScript. With quizzes categorized by
                difficulty levels, you can test and enhance your knowledge of
                web development concepts. Get started with QuizHub and stand out
                in this crowded field.
              </div>
              <div class="html3">
                <Link to="/htmlquiz">
                  <button>Take the Quiz</button>
                </Link>
              </div>
            </div>
            <div class="css">
              <div class="css1">
                <li>CSS</li>
                <li>Cascading Style Sheet</li>
              </div>
              <div class="css2">
                CSS is one of the many elements that go into a successful
                development project. At QuizHub, our quizzes provide expert
                guidance in all aspects of CSS.
              </div>
              <div class="css3">
                <Link to="/cssquiz">
                  <button>Take the Quiz</button>
                </Link>
              </div>
            </div>
            <div class="js">
              <div class="js1">
                <li>JavaScript</li>
                <li>Quality Learning</li>
              </div>
              <div class="js2">
                At QuizHub, we are committed to providing quality learning
                experiences for individuals and BTech CSE engineering students.
                With our JavaScript quizzes, you can enhance your knowledge and
                skills in this essential programming language.
              </div>
              <div class="js3">
                <Link to="/jsquiz">
                  <button>Take the Quiz</button>
                </Link>
              </div>
            </div>
          </div>
         
    );
}

export default Quiz;