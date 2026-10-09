import Hero from "@/components/home/Hero";
import IncreasePrice from "@/components/home/IncreasePrice";
import DecreasePrice from "@/components/home/DecreasePrice";
import AllProducts from "@/components/home/AllProduct";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <IncreasePrice></IncreasePrice>
      <DecreasePrice></DecreasePrice>
      <AllProducts></AllProducts>
    </div>
  );
}
