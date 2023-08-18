const Contact = () => {
  return (
    <div>
      <h1 className="m-4 p-4 font-bold text-2xl">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black m-4 p-4"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black m-4 p-4"
          placeholder="message"
        />
        <button className="border border-black m-4 p-4 bg-gray-200 hover:bg-gray-300 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
