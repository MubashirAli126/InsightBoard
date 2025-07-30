import React from "react";

interface PackageToggleTabsProps {
  mode: "monthly" | "yearly";
  setMode: (value: "monthly" | "yearly") => void;
  type: "basic" | "pro";
  setType: (value: "basic" | "pro") => void;
}

const PackageToggleTabs: React.FC<PackageToggleTabsProps> = ({ mode, setMode, type, setType }) => (
  <div className="flex justify-between items-center gap-4 mb-6">
    <div className="flex items-center gap-2">
      <button
        className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === "monthly" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
        onClick={() => setMode("monthly")}
      >
        Monthly
      </button>
      <button
        className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === "yearly" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
        onClick={() => setMode("yearly")}
      >
        Yearly
      </button>
    </div>
    <div className="flex items-center gap-2">
      <button
        className={`px-4 py-2 rounded-lg text-sm font-medium ${type === "basic" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
        onClick={() => setType("basic")}
      >
        Basic
      </button>
      <button
        className={`px-4 py-2 rounded-lg text-sm font-medium ${type === "pro" ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
        onClick={() => setType("pro")}
      >
        Pro
      </button>
    </div>
  </div>
);

export default PackageToggleTabs;