import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
        <h1>About Class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold text-lg">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is an About Page!</h2>
        {/* <User /> */}
        <UserClass name={"First"} location={"Gaya Class"} />
      </div>
    );
  }
}

export default About;
