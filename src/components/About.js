import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Page</h1>
        <h2>This is an About Page!</h2>
        {/* <User /> */}
        <UserClass name={"First"} location={"Gaya Class"} />
      </div>
    );
  }
}

export default About;
