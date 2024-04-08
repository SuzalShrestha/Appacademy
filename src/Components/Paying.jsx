import { DM_Serif_Display } from "next/font/google";
const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});
function Paying() {
  return (
    <div className="flex items-center justify-center container m-auto px-40">
      <div className="paying grid grid-col-1 gap-12 max-h-[1000px] my-20 px-20">
        <div
          className={`flex  text-center items-center justify-center text-7xl ${dmSerifDisplay.className}`}
        >
          Software Engineering is one of the highest paying careers
        </div>
        <div className="text-center text-2xl">
          <p>
            <a
              href="https://money.usnews.com/careers/best-jobs/software-developer"
              className="text-[#d0021b] underline"
            >
              U.S. News & World Report
            </a>{" "}
            consistently ranks Software Developer as a top job because of its
            favorable salary and growth opportunities. According to a{" "}
            <a
              href="https://www.coursereport.com/2021-guide-to-coding-bootcamps-by-course-report.pdf"
              className="text-[#d0021b] underline"
            >
              2021 Course Report Survey,
            </a>{" "}
            the average post-bootcamp salary is $69,000.
          </p>
        </div>
        <div className="text-center text-2xl">
          Top bootcamps like App Academy, however, can net you salaries up to
          approx. $12,000 more per year. In 2021, graduates who completed our
          Full-Time Coding Bootcamp averaged an $81,007 first year compensation.
        </div>
        <div className="flex items-center justify-center">
          <div className="">
            <a
              href="https://www.appacademy.io/outcomes-information"
              className="bg-[#d0021b] text-white py-5 text-lg px-10 rounded-[3px]"
            >
              View More Student Outcomes Data
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center py-10">
          <img src="https://assets-global.website-files.com/5dcc7f8c449e597ed83356b8/65e74b7c16f21e75b7ee589e_app%20academy%27s%20compensation%20graphic-march2024.png"></img>
        </div>
      </div>
    </div>
  );
}
export default Paying;
