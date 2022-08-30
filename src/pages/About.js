import { Component } from "react";

class Profile extends Component {

  render() {
    return(
      <main className="Main">

        <h1>About The Devs</h1>
        <div className="dev">
          <h2>Branden Ge</h2>
          <p>Software Developer - Rockford, IL</p>
        </div>
        <div className="dev">
          <h2>Robert Shepley</h2>
          <p>Software Developer - Seattle, WA</p>
        </div>
      </main>
    )
  }
};

export default Profile;
