import { Button } from "../ui/button";

const Landing = () => {
  return (
    <div className="flex w-full  max-w-[1400px]  md:flex-row flex-col items-center overflow-hidden">
      <img
        className="w-1/5 my-8 mb-0 md:hidden"
        src="/assets/logo.svg"
        alt=""
      />
      <div className="flex flex-1 p-8 flex-col justify-center">
        <p className="lg:text-7xl md:text-4xl md:text-left text-4xl text-center font-bold uppercase">
          Learn from <span className="text-[#3772ff]">professionals</span>
        </p>
        <p className="my-5 lg:text-lg md:text-left text-center text-md text-[#6a6b68]">
          Start your journey with us today by registering now!
        </p>

        <div className="flex justify-center md:block">
          <Button className="bg-[#3772ff] font-bold lg:px-20 lg:py-9 rounded-lg lg:text-lg hover:bg-[#3f64b9] transition ease-in-out md:px-10 md:py-7 px-10 py-7 text-md">
            Join for Free
          </Button>
        </div>
      </div>

      <img
        className="flex-1 w-1/2 hidden md:block -z-[1]"
        src="/assets/landing-logo.svg"
        alt=""
      />
    </div>
  );
};

export default Landing;
