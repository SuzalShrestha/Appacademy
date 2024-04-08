import { DM_Serif_Display } from "next/font/google";
const displayserif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});
function Dive() {
  return (
    <div className="bg-[#284A66] text-white grid grid-col-1 max-h-500px h-500px sticky top-0">
      <h1 className={`${displayserif.className} my-6 text-5xl text-center`}>
        Dive into App Academy
      </h1>
      <div className="flex gap-20 item-center mb-5 justify-center text-lg">
        <div className="flex justify-center items-center">
          New!Free Bootcamp Prep
        </div>
        <div className="flex justify-center items-center">Tution Overview</div>
        <div className="flex justify-center items-center">
          Immersive Programs
        </div>
        <div className="flex justify-center items-center">
          Our Approach to AI
        </div>
        <div>
          <button className="border-2 border-white py-2 px-8 rounded-lg hover:bg-white hover:text-[#284A66]">
            Apple Now
          </button>
        </div>
      </div>
    </div>
  );
}
export default Dive;
