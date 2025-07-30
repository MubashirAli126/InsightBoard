import React, { useState } from "react";
import { packageData } from "../components/packages/packageData";
import PackageToggleTabs from "../components/packages/PackageToggleTabs";
import PackageGrid from "../components/packages/PackageGrid";
import CurrencyDropdown from "../components/packages/CurrencyDropdown";
import { normalizePackages } from "../utils/normalizeFeatures";

const PackagesView: React.FC = () => {
  const [mode, setMode] = useState<"monthly" | "yearly">("monthly");
  const [type, setType] = useState<"basic" | "pro">("basic");
  const [currency, setCurrency] = useState<"usd" | "pkr">("usd"); // optional

  const currentPackages = packageData[mode][type];
  const safePackages = normalizePackages(currentPackages);

  return (
    <div className="p-4 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-merriweathe mb-1">Select subscription</h1>
          <p className="text-gray-400 text-sm font-montserrat">Select the package you think is good for your business.</p>
        </div>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="flex border rounded-full overflow-hidden text-sm">
            <button
              className={`px-6 py-2 ${mode === "monthly" ? "bg-sidebar-gradient" : "bg-white text-gray-800"}`}
              onClick={() => setMode("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 ${mode === "yearly" ? "bg-sidebar-gradient" : "bg-white text-gray-800"}`}
              onClick={() => setMode("yearly")}
            >
              Yearly
            </button>
          </div>
          <CurrencyDropdown selected={currency} onChange={setCurrency} />
        </div>
      </div>
      <hr />
      {/* Package Type Toggle (Basic / Pro) */}
      <div className="flex gap-4 my-6">
        <button
          className={`px-6 py-2 text-sm rounded-full font-medium ${
            type === "basic" ? "bg-sidebar-gradient" : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setType("basic")}
        >
          Basic Package
        </button>
        <button
          className={`px-6 py-2 text-sm rounded-full font-medium ${
            type === "pro" ? "bg-sidebar-gradient" : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => setType("pro")}
        >
          Pro Package
        </button>
      </div>

      {/* Package Cards */}
      <PackageGrid packages={safePackages} billingMode={mode} />

    </div>
  );
};

export default PackagesView;