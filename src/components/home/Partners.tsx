const Partners = () => {
  return (
    <div className="w-full bg-[#e0e2db] p-6 md:px-20 md:py-10 flex flex-col items-center">
      <div>
        <p className="lg:text-2xl font-bold lg:text-left text-center">
          Our leading industry and university partners.{" "}
          <span className="text-[#3772ff]">Over 100+ collaborators</span>
        </p>
      </div>

      <div className="flex gap-10 my-5 flex-wrap justify-center ">
        <img className=" object-contain" src="/assets/google-icon.svg" alt="" />
        <img
          className="!m-0 object-contain"
          src="/assets/meta-icon.png"
          alt=""
        />
        <img
          className="!m-0 object-contain"
          src="/assets/microsoft-icon.svg"
          alt=""
        />
        <img
          className="!m-0 object-contain"
          src="/assets/IIT_Bombay.png"
          alt=""
        />
        <img
          className="!m-0 object-contain"
          src="/assets/ISB_transparent_logo.png"
          alt=""
        />
        <img className="!m-0 object-contain" src="/assets/aws.png" alt="" />
        <img className="!m-0 object-contain" src="/assets/IBM.png" alt="" />
        <img
          className="!m-0 object-contain"
          src="/assets/stanford.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Partners;
