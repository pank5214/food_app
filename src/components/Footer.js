// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-pink-100 flex justify-center inset-x-0 bottom-0 shadow-lg  p-6 my-2 fixed">
      Created By ❤️
      <a
        className="px-2 font-bold text-blue-700 hover:text-red-600"
        href="https://www.linkedin.com/in/pankaj5214/"
        target="_blank"
        title="Pankaj's Linkedin Profile"
      >
        Pankaj Kumar
      </a>
      <i>©</i>
      {year}
      <strong className="px-2">
       <span>Food</span>
       <span className="text-red-500">Hunger</span>
      </strong> 
    </div>
  );
};

export default Footer;
