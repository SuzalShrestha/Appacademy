import { DM_Serif_Display } from "next/font/google";
import Image from "next/image";
const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});
function Hero() {
  return (
    <div className="hero  mix-blend-saturation ">
      <div className="hero_text_wrapper">
        <div className="grid grid-cols-2 bg-[#F8F8F8] ">
          <div className=" grid gap-8 grid-col-1 h-[1200px] p-60 mt-[60px]  items-center">
            <div className="">
              <span className={`text-7xl ${dmSerifDisplay.className}`}>
                Change your career, Change your life
              </span>
            </div>
            <div className="flex items-center justify-center text-xl">
              Our software engineering bootcamps are designed to help people
              with little to no coding experience become high-earning software
              engineers.
            </div>
            <div className="bg-white rounded-xl shadow-xl my-4 p-5 ">
              <div className="flex gap-10 items-center">
                <img src="https://assets-global.website-files.com/5dcc7f8c449e597ed83356b8/6483b41e3ea75b838f1aa20c_489-codepen%201.svg"></img>
                <h1 className="text-2xl ">New! Free BootCamp Prep Course</h1>
              </div>
              <p className="mt-5 pr-10 text-lg">
                Our Free Bootcamp Prep Course is part of our admissions process
                and will provide you with a sneak peak of how our programs work.
                You’ll also get some hands-on coding experience ahead of having
                to commit to one of our full-fledged bootcamps.
              </p>
            </div>
          </div>
          <div className="bg-cover  bg-center bg-hero-image"></div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
