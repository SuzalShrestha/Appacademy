import { DM_Serif_Display } from "next/font/google";
const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});
function Hero() {
  return (
    <div className="hero mx-auto">
      <div className="hero_text_wrapper w-50%">
        <div className="upper-text">
          <div className="text-lg">Change your career, Change your life</div>
          <div className="lower-text">
            Our software engineering bootcamps are designed to help people with
            little to no coding experience become high-earning software
            engineers.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
