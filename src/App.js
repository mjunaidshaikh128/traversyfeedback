import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { Link } from "react-router-dom"
import { FaQuestion } from 'react-icons/fa';
import Posts from './components/Posts';


function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  function handleDelete(id) {
    console.log(`app ${id}`);
    setFeedback(feedback.filter((item) => item.id !== id))
  }

  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4()
    setFeedback([...feedback, newFeedback])
    console.log(newFeedback);
  }
  return (
    <Router>
      <Header bgColor={"black"} fontColor={"white"} />
      <Routes>
        <Route exact path='/' element={
          <>
            <FeedbackForm handleadd={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={handleDelete} />
            <Link to={'/about'}>
              <FaQuestion size={30} />
            </Link>
          </>
        } />


        <Route path='/about' element={<AboutPage />} />
        <Route path='/posts/:id' element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
