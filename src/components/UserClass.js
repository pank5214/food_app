import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        login: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name, "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name, "Child component Did Mount");
    const data = await fetch("https://api.github.com/users/pank5214");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log("ComponentDidMount Timer");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer  );
    console.log("Component Will Unmount");
  }
  render() {
    console.log(this.props.name, "Child Render");
    const { name, login, avatar_url } = this.state.userInfo;

    // debugger;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location: {login}</h3>
        <h4>Contact: @rocky5214</h4>
      </div>
    );
  }
}

export default UserClass;

/*
 *
 *------------ MOUNTING ----------------
 * Constructor(Dummy)
 * Render(Dummy)
 *      <HTML Dummy>
 * Component Did Mount
 *       <API CALL>
 *       <this.setState ----> state variable is updated
 *
 *
 * --------- UPDATE ----------
 *       Render(API Data)
 *       <HTML(new API data)>
 *        Component Did Update
 *
 */
