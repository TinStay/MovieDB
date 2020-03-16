import React from 'react';
import MovieSearch from './containers/MovieSearch/MovieSearch';
import Footer from './components/Navigation/Footer/Footer';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import './App.css';
import NavBar from './components/Navigation/Navbar';

function App() {
  return (
    <Router>
      <NavBar />
        <Redirect from='/' to='/popular' />
        <Route path="/popular" component={MovieSearch}/>
        <Route path="/now_playing" component={MovieSearch}/>
        <Route path="/top_rated" component={MovieSearch}/>
        <Route path="/upcoming" component={MovieSearch}/>
        <Footer />
    </Router>
  );
}

export default App;
