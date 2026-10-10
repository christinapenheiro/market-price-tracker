"use client"



const HeroButton = () => {
    return (
      <div className="mt-7">
        <button
          className="btn border-0 bg-green-700 px-6 text-white hover:bg-green-800 drop-shadow-green-400 shadow-2xl"
          onClick={() =>
            window.scrollTo({
              top: document.getElementById("all-product")?.offsetTop,
              behavior: "smooth",
            })
          }
        >
          সব পণ্য দেখুন
        </button>
      </div>
    );
};

export default HeroButton;