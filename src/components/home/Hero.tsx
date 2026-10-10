import { FormattedDate } from "../shared/FormateDate";
import Image from "next/image";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    // <div className="bg-white flex flex-col md:flex-row">
    //   <div>
    //     <button className="bg-green-300 text-green-700 rounded p-2">
    //       {" "}
    //       <FormattedDate></FormattedDate>
    //     </button>
    //     <h1>আজকের বাজারের দাম এক নজরে</h1>
    //     <p>
    //       চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
    //       বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
    //     </p>
    //     <Link href="/" className="btn bg-green-700 btn-sm sm:btn-md">
    //       সব পণ্য দেখুন
    //     </Link>
    //   </div>
    //   <div>
    //     <Image src={`/bazar-hero.png`} width={300} height={100} alt="busket"></Image>
    //   </div>
    // </div>
    <div className="bg-white container mx-auto rounded-xl my-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 py-12 sm:px-8 md:flex-row md:gap-12 md:py-16 lg:px-12 lg:py-20">
        {/* Hero Content */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            <FormattedDate />
          </span>

          <h1 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg md:mx-0">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <HeroButton></HeroButton>
        </div>

        {/* Hero Image */}
        <div className="flex flex-1 justify-center md:justify-end">
          <div className="w-full max-w-sm rounded-3xl bg-white p-4  sm:max-w-md">
            <Image
              src="/bazar-hero.png"
              width={500}
              height={350}
              alt="বাজারের পণ্যের ঝুড়ি"
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
