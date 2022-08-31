import { Component } from "react";

class About extends Component {

  render() {
    return(
      <main className="Main">

        <h1 className="text-white">About The Devs</h1>
        <div className="dev text-white">
          <h2>Branden Ge</h2>
          <p>Software Developer - Rockford, IL</p>
        </div>
        <div className="dev text-white">
          <h2>Robert Shepley</h2>
          <p>Software Developer - Seattle, WA</p>
        </div>
      </main>
    )
  }
};

export default About;
