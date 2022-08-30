import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Library from '../pages/Library';
import About from '../pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<Library />}
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