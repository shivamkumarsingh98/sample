import Image from "next/image";
import HeroSection from "./component/HeroSection";
import Mainpage from "./component/Mainpage";
import Navbar from "./component/Navebar";
import Applysection from "./component/Applysection";

function Home() {
  return (
    <div className="bg-zinc-100">
      <HeroSection />
      <Mainpage />
      <Applysection />
    </div>
  );
}

export default Home;
