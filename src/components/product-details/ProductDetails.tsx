import IProducts from "@/types/products";

interface ProductDetailsProps {
  prop: IProducts;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("bn-BD", {
    maximumFractionDigits: 2,
  }).format(price);

export default function ProductDetails({ prop }: ProductDetailsProps) {
  const averagePrice =
    prop.markets && prop.markets.length > 0
      ? prop.markets.reduce(
          (total, market) => total + (market.min + market.max) / 2,
          0,
        ) / prop.markets.length
      : prop.today;

  const lowestMarketPrice = prop.markets?.reduce((prev, curr) =>
    prev.min < curr.min ? prev : curr,
  );

  const highestMarketPrice = prop.markets?.reduce((prev, curr) =>
    prev.max > curr.max ? prev : curr,
  );

  const averagePriceTotal =
    (highestMarketPrice?.max + lowestMarketPrice?.min) / 2;

  const priceChange = prop.change.pct;
  const changeColor =
    prop.change.dir === "up"
      ? "text-red-600"
      : prop.change.dir === "down"
        ? "text-green-600"
        : "text-gray-500";

  const changeSymbol =
    prop.change.dir === "up" ? "▲" : prop.change.dir === "down" ? "▼" : "—";

  const priceCards = [
    {
      label: "সর্বনিম্ন দাম",
      price: lowestMarketPrice?.min,
      color: "text-green-600",
      text: "সবচেয়ে কম দামের বাজার",
    },
    {
      label: "সর্বাধিক দাম",
      price: highestMarketPrice?.max,
      color: "text-red-600",
      text: "সবচেয়ে বেশি দামের বাজার",
    },
    {
      label: "গড় দাম",
      price: averagePriceTotal,
      color: "text-green-600",
      text: "প্রতি কেজি-এর হিসাবে",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-3 py-5  sm:py-7 container mx-auto">
      <div className="mx-auto max-w-7xl space-y-3">
        {/* Product header */}
        <section className="flex items-center justify-between gap-3 rounded-xl border border-[#e1e9e1] bg-white p-3 sm:p-5">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#f0f5f0] text-3xl sm:size-16">
              {prop.image || prop.categoryIcon || "🛒"}
            </div>

            <div className="min-w-0">
              <p className="mb-1 text-xs font-medium text-gray-500">
                {prop.categoryNameBn}
              </p>

              <h1 className="text-base font-bold text-[#26352b] sm:text-xl">
                {prop.nameBn}
              </h1>

              <p className="mt-1 text-xs text-gray-500">
                {`প্রতি ${prop.unit}.${prop.categoryNameBn}`}
              </p>
              <p className="text-sm">
                গতকালের তুলনায় আজ দাম{" "}
                {`${prop.today > prop.yesterday ? "বেড়েছে" : prop.today < prop.yesterday ? "কমেছে" : "পরিবর্তন"} . ${prop.today > prop.yesterday ? formatPrice(prop.today - prop.yesterday) : prop.today < prop.yesterday ? formatPrice(prop.yesterday - prop.today) : "0"}`}{" "}
                টাকা
              </p>
            </div>
          </div>

          <div className="shrink-0 rounded-xl bg-[#f0f5f0] px-3 py-2 text-center sm:px-5 sm:py-3">
            <p className="text-[10px] text-gray-500 sm:text-xs">আজকের দাম</p>

            <p className="text-xl font-extrabold text-[#26352b] sm:text-2xl">
              {formatPrice(prop.today)}
            </p>

            <p className="text-[10px] text-gray-500 sm:text-xs">
              টাকা / {prop.unit}
            </p>

            <p className={`mt-1 text-[10px] font-semibold ${changeColor}`}>
              {changeSymbol} {formatPrice(priceChange)}%
            </p>
          </div>
        </section>

        {/* Price summary */}
        <section className="rounded-xl border border-[#e1e9e1] bg-white p-3 sm:p-4">
          <h2 className="mb-3 text-sm font-bold text-[#26352b]">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {priceCards.map((card) => (
              <div
                key={card.label}
                className="rounded-xl border border-[#e5ece5] bg-[#fbfdfb] p-3"
              >
                <p className="text-xs text-gray-500">{card.label}</p>

                <p className={`mt-1 text-lg font-bold ${card.color}`}>
                  {formatPrice(card.price)} টাকা
                </p>

                <p className="mt-1 text-[10px] text-gray-500">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Market prices */}
        <section className="rounded-xl border border-[#e1e9e1] bg-white p-3 sm:p-4">
          <h2 className="mb-3 text-sm font-bold text-[#26352b]">
            বাজারভিত্তিক আজকের দাম
          </h2>

          {prop.markets && prop.markets.length > 0 ? (
            <div className="overflow-x-auto rounded-lg">
              <table className="w-full min-w-135 border-collapse text-left text-xs">
                <thead>
                  <tr className="border-y border-[#edf1ed] bg-[#fafcfa] text-gray-500">
                    <th className="px-3 py-3 font-medium">বাজার</th>
                    <th className="px-3 py-3 font-medium">বিভাগ</th>
                    <th className="px-3 py-3 text-right font-medium">
                      সর্বনিম্ন
                    </th>
                    <th className="px-3 py-3 text-right font-medium">
                      সর্বোচ্চ
                    </th>
                    <th className="px-3 py-3 text-right font-medium">গড়</th>
                  </tr>
                </thead>

                <tbody>
                  {prop.markets.map((market, index) => {
                    const marketAverage = (market.min + market.max) / 2;

                    return (
                      <tr
                        key={`${market.market}-${market.division}-${index}`}
                        className="border-b border-[#e8eee8] odd:bg-white even:bg-[#f0f5f0] hover:bg-[#e8f1e8]"
                      >
                        <td className="whitespace-nowrap px-3 py-3 font-medium text-[#344238]">
                          {market.market}
                        </td>

                        <td className="whitespace-nowrap px-3 py-3 text-gray-600">
                          {market.division}
                        </td>

                        <td className="whitespace-nowrap px-3 py-3 text-right text-gray-700">
                          {formatPrice(market.min)} টাকা
                        </td>

                        <td className="whitespace-nowrap px-3 py-3 text-right text-gray-700">
                          {formatPrice(market.max)} টাকা
                        </td>

                        <td className="whitespace-nowrap px-3 py-3 text-right font-semibold text-[#344238]">
                          {formatPrice(marketAverage)} টাকা
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="rounded-lg bg-[#f5f8f5] px-4 py-8 text-center text-sm text-gray-500">
              এই পণ্যের বাজারভিত্তিক দাম এখনো পাওয়া যায়নি।
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
