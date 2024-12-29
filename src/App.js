import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ArticleForm from './ArticleForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header class="App-header me-auto d-flex">
          <img src="news.gif" class="icon" alt=""></img>
          <h1 class="ms-2 bold">Trendy Newz</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article-form" element={<ArticleForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
