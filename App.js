import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React! 🚀"
);

console.log(heading);

// JSX (transpiled before it reaches the JS) --> PARCEL --> Babel

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

console.log(jsxHeading);

// React Component
const Title = () => <h1>This is React Title</h1>;
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {Title()}
    <Title></Title>
    <h1 className="heading">Namaste React Functional Component 🚀</h1>
    {jsxHeading}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
