import ProductList from "@/components/category/ProductList";
import SortingButton from "@/components/category/SortinfButton";
import ProductCard from "@/components/home/ProductCard";
import IProducts from "@/types/products";


const Category = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const categories = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${encodeURIComponent(slug)}`,{
      next: { revalidate: 60 }
    }
  );
  const data:IProducts[] = await categories.json();
//   const category = data.filter(
//     (product: IProducts) => product.category === String(slug),
//   );

  return (
    // <div>
    //   <div className="">
    //     <div className="flex items-center bg-white rounded">
    //       <span className="">{data[0]["categoryIcon"]}</span>
    //       <div>
    //         <h3>{data[0]["categoryNameBn"]}</h3>
    //         <p>{`${data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন`}</p>
    //       </div>
    //     </div>
    //     <div className="bg-white text-right">
    //       <span>সাজান</span>
    //       <div className="dropdown dropdown-center">
    //         <div tabIndex={0} role="button" className="btn m-1">
    //           ডিফল্ট <RiArrowDropDownLine />
    //         </div>
    //         <ul
    //           tabIndex={-1}
    //           className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
    //         >
    //           <li>
    //             <a>দাম: কম থেকে বেশি</a>
    //           </li>
    //           <li>
    //             <a>দাম: বেশি থেকে কম</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <span>{`মোট ${data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে`}</span>
    //   <div className="grid grid-cols-3 gap-3">
    //     {data.map((product: IProducts) => (
    //       <ProductCard prop={product} key={product.id}></ProductCard>
    //     ))}
    //   </div>
    // </div>

    <div className="space-y-5 container mx-auto mt-10">
    
    <ProductList prop={data}></ProductList>
    </div>
  );
};

export default Category;
