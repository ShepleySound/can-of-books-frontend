import { Component } from "react";
import './About.css';

class About extends Component {

  render() {
    return(
      <main className="Main">
        <h1>About</h1>
        <h1 className="text-white">About The Devs</h1>
        <div className="dev text-white">
          <h2>Branden Ge</h2>
          <p>Software Developer - Rockford, IL</p>
        </div>
        <div className="dev text-white">
          <h2>Robert Shepley</h2>
          <p>Software Developer - Seattle, WA</p>
        </div>
        <h2>GitHub Source</h2>
        <a href="https://github.com/shepleysound/can-of-books-frontend">Front-End</a>
        <a href="https://github.com/brandenge/can-of-books-backend">Back-End</a>
      </main>
    )
  }
};

export default About;
