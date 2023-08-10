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
        <User />
        {/* <UserClass name={"First"} location={"Gaya Class"} /> */}
      </div>
    );
  }
}

export default About;

/*
Parent Constructor
 Parent Render

 First Child Constructor
 First Child Render

 Second Child Constructor
 Second Child Render

 Third Child Constructor
 Third Child Render

 <DOM Updated => in a single batch>

 First Child component Did Mount
 Second Child component Did Mount
 Third Child component Did Mount

Parent Component Did Mount
*/
