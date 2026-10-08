import Marquee from "@/components/shared/Marquee";
import Hero from "@/components/home/Hero";
import IncreasePrice from "@/components/home/IncreasePrice";
import DecreasePrice from "@/components/home/DecreasePrice";

export default function Home() {
  return (
    <div>
      <Marquee></Marquee>
      <Hero></Hero>
      <IncreasePrice></IncreasePrice>
      <DecreasePrice></DecreasePrice>
    </div>
  );
}
