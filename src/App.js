import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
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
import { FeedbackProvider } from './context/FeedbackContext';


function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header bgColor={"black"} fontColor={"white"} />
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
              <Link to={'/about'}>
                <FaQuestion size={30} />
              </Link>
            </>
          } />


          <Route path='/about' element={<AboutPage />} />
          <Route path='/posts/:id' element={<Posts />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
