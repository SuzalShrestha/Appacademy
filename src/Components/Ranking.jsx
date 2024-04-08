import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
const dm_display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});
function Ranking() {
  return (
    <div className="max-h-full flex-col items-center justify-center m-40 max-w-auto ">
      <div className="flex-col items-center justify-center">
        <h1
          className={`${dm_display.className} antialiased text-7xl mb-10 text-center`}
        >
          Ranked a top software engineering coding bootcamp
        </h1>
        <p className="mb-10 text-xl text-center mx-60">
          Since App Academy started in 2012, we've consistently been regarded as
          one of the best software engineering coding bootcamps in the world by
          students and employers. Over 5,000 students have graduated from our
          programs with the skills necessary to land a job in tech!
        </p>
      </div>
      <div className="awards flex gap-20 h-[180px] items-center justify-center ">
        <div className="bg-cover bg-award-image-1  h-full w-[220px]"></div>
        <div className="bg-award-image-2 bg-cover  h-full w-[220px]"></div>
        <div className="bg-award-image-3 bg-cover  h-full w-[220px]"></div>
      </div>
      {/* <div className="slider mt-4 flex items-center justify-center">
        <div className="w-[70%] h-[200px] border-[#d0021b] border-4 mt-10 rounded-[35px] grid grid-row-1 grid-cols-3">
          <div className="left-arrow text-[100px] text-[#d0021b] px-10 w-[25%]">
            {"<"}
          </div>
          <div className="slider h-[100%]">Slider</div>
          <div className="right-arrow text-[100px] text-[#d0021b]  w-[25%]">
            {">"}
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default Ranking;
