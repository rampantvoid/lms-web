import Explore from "@/components/home/Explore";
import Landing from "@/components/home/Landing";
import Partners from "@/components/home/Partners";
import Testimonial from "@/components/home/Testimonial";

const Home = () => {
  return (
    <div className=" flex flex-col items-center pt-20">
      <Landing />
      <Partners />
      <Explore />
      <Testimonial />
    </div>
  );
};

export default Home;
