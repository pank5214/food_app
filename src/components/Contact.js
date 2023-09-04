import { useState } from "react";
import contact from "../../Images/Contact-Us.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="flex flex-col md:flex-row md:justify-around m-4 p-4 h-auto w-screen">
      <div className="flex self-center">
        <img src={contact} alt="contact-image" />
      </div>
      <div className="flex flex-col self-center w-[90%] md:w-1/3">
        <h1 className="font-bold text-3xl md:text-5xl flex flex-row self-center py-4">
          Contact us
        </h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            className="p-2 my-2 border border-solid border-slate-400 rounded-md"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="p-2 my-2 border border-solid border-slate-400 rounded-md"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="p-2 my-2 border border-solid border-slate-400 rounded-md"
            placeholder="Type your Message here..."
            required
          ></textarea>
          <button
            className="flex self-center py-2 px-4 w-20 text-black bg-green-300 mt-2 mb-14 md:m-4 rounded-lg hover:bg-green-400"
            type="submit"
          >
            Submit
          </button>
          {message && (
            <span className="flex self-center font-bold md:text-lg mb-16 -mt-12 md:m-0">
              Thanks for Contacting us, We will reply ASAP.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
