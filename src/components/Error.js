import { useRouteError } from "react-router";
import ErrorImage from "../../Images/404 Error.jpg";
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="grid justify-items-center bg-gradient-to-t">
      <img src={ErrorImage} alt="error" />
      <div className="grid">
        <h1 className="font-bold md:text-2xl my-4">
          Oops! Restaurant not found, explore more delicious options!
        </h1>
        <h3 className="font-bold text-sm font-style: italic md:text-lg my-4 justify-self-center">
          {err.data}
        </h3>

        <div className="grid justify-items-center">
          <Link to={"/"}>
            <button className="bg-green-300 hover:bg-green-400 rounded-lg p-3 my-4">
              Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
