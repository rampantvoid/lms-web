const Footer = () => {
  return (
    <div className="w-full bg-black p-8 flex flex-col items-center text-white">
      <div className=" flex p-8 justify-center gap-20 flex-col md:flex-row ">
        {/* <div className="flex flex-col items-center p-8">
          <img className="w-[100px]" src="/assets/logo.svg" alt="" />
          <p className="text-3xl font-bold mt-2">EDU.</p>
        </div> */}

        <div className="p-8 flex flex-col">
          <p className="text-xl font-bold">Company</p>
          <p>
            <ul className=" list-none font-light mt-8 space-y-4">
              <li>About Us</li>
              <li>Careers</li>
              <li>Courses</li>
            </ul>
          </p>
        </div>

        <div className="p-8 flex flex-col">
          <p className="text-xl font-bold">Support</p>
          <p>
            <ul className=" list-none font-light mt-8 space-y-4">
              <li>Privacy And Policy</li>
              <li>Terms And Conditions</li>
              <li>Contact Us</li>
            </ul>
          </p>
        </div>

        <div className="p-8 flex flex-col">
          <p className="text-xl font-bold">Top Courses</p>
          <p>
            <ul className=" list-none font-light mt-8 space-y-4">
              <li>Data Structures</li>
              <li>Artificial Intelligence</li>
              <li>Web Development</li>
              <li>Blockchain</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="md:text-md text-sm ">
        <p>COPYRIGHT © EDU POINT PVT LTD</p>
      </div>
    </div>
  );
};

export default Footer;
