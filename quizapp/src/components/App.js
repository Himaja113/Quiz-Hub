import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./home";
import Login from "./login"
import Signup from "./register"
import HtmlQuiz from './HtmlQuiz';
import CssQuiz from './CssQuiz';
import JsQuiz from './JsQuiz';
import Quiz from './Quiz';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/> {/* Add your Login component */}
          <Route path='/quiz' element={<Quiz/>}/>
          <Route path="/htmlquiz" element={<HtmlQuiz />} />
          <Route path="/cssquiz" element={<CssQuiz />} />
          <Route path="/jsquiz" element={<JsQuiz />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
