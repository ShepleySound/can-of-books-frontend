import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import BestBooks from '../components/BestBooks';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
            <Route
              exact path="/about"
              element={<About/>}></Route>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
