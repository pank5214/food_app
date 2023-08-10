import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    const Timer = setInterval(() => {
    //   console.log("UseEffect Timer");
    }, 1000);

    // console.log("UseEffect");

    // To stop the Timer, we have to return clearInterval() ---> in useEffect => It will unmount the component from web
    return () => {
      clearInterval(Timer);
    //   console.log("UseEffect Return");
    };
  }, []);

  console.log("Render");

  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h1>Count2 : {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Gaya</h3>
      <h4>Contact: @rocky5214</h4>
    </div>
  );
};

export default User;
