import React from "react";
import { Package } from "../../types";
import { Check, Plus, X } from "lucide-react";

interface PackageCardProps {
  pkg: Package;
  billingMode: "monthly" | "yearly";
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, billingMode }) => {
  const isYearly = billingMode === "yearly";
const numericPrice =
  typeof pkg.price === "string"
    ? Number(pkg.price.replace(/,/g, ""))
    : pkg.price;

const discountedPrice = billingMode === "yearly"
  ? Math.round(numericPrice * 0.9)
  : numericPrice;

  const formattedPrice = discountedPrice.toLocaleString();
  

  return (
    <div className="bg-sidebar-gradient rounded-xl p-6 bg-white shadow-sm space-y-4">
      {/* Title and Price */}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-medium blackcolor font-montserrat">{pkg.name}</h3>
        <div className="text-3xl font-medium font-merriweather blackcolor text-right">
          {isYearly && (
            <span className="text-xl line-through text-gray-400 mr-2">
              {pkg.price}
            </span>
          )}
          {formattedPrice}
          <span className="text-xs ml-1 py-1 px-2 rounded-lg" style={{backgroundColor:"#E3EAFD", color:"#133A9A"}}>USD</span> 
        </div>
      </div>
        <div className="text-xs font-medium graycolor font-montserrat">
            Perfect for early-stage retailers looking to set up their online store and manage orders with ease.
        </div>
        <hr />
      {pkg.features.map((feature: { status: string; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => {
        const icon =
          feature.status === "C" ? (
            <Check className="w-4 h-4" />
          ) : feature.status === "X" ? (
            <X className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          );

        const bgColor =
          feature.status === "C"
            ? "bg-customGreen text-white"
            : feature.status === "X"
            ? "bg-customRed text-white"
            : "bg-customYellow text-white";

        return (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold blackcolor font-montserrat ">{feature.title}</p>
                <p className="text-xs graycolor font-montserrat leading-6">{feature.description}</p>
              </div>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${bgColor}`}
              >
                {icon}
              </div>
            </div>
          </div>
        );
      })}
      <hr />
        <div className="mb-3 px-6 py-2 border border-yellow-500 rounded-full bg-bg-yellow-50">
        <div className="flex justify-between items-center">
            <div>
            <p className="text-sm font-semibold font-montserrat">Pay Online</p>
            <p className="text-xs font-montserrat leading-6">Access account instantly</p>
            </div>
            <div className="w-7 h-7 rounded-full text-black flex items-center justify-center text-xl font-black">
            →
            </div>
        </div>
        </div>
    </div>
  );
};

export default PackageCard;
