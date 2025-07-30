import React from "react";
import { Feature } from "../../types";

interface FeatureRowProps {
  feature: Feature;
}

const FeatureRow: React.FC<FeatureRowProps> = ({ feature }) => {
  const { title, status } = feature;

  return (
    <div className="flex items-center gap-2 text-sm">
      {status === "C" && <span>✅</span>}
      {status === "P" && <span>🟡 +$5</span>}
      {status === "X" && <span>❌</span>}
      <span>{title}</span>
    </div>
  );
};

export default FeatureRow;
