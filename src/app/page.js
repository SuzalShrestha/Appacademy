import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import { DM_Sans } from "next/font/google";
import Experience from "../Components/Experience";
import Ranking from "@/Components/Ranking";
const sans = DM_Sans({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main>
      <div className={sans.className}>
        <Nav />
        <Hero />
        <Experience />
        <Ranking />
      </div>
    </main>
  );
}
