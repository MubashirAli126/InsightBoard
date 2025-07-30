import React from "react";
import PackageCard from "./PackageCard";
import { Package } from "../../types";

interface PackageGridProps {
  packages: Package[];
  billingMode: 'monthly' | 'yearly';
}

const PackageGrid: React.FC<PackageGridProps> = ({ packages, billingMode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-14">
    {packages.map((pkg, i) => (
      <PackageCard key={i} pkg={pkg} billingMode={billingMode} />
    ))}
  </div>
);

export default PackageGrid;
