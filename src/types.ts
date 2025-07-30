// Allowed statuses for features in a package
export type FeatureStatus = "included" | "addon" | "not_available";

export interface FeatureRowProps {
  feature: Feature;
}

export type Feature = {
  title: string;
  description: string;
  status: "C" | "X" | "P"; // C: correct, X: not included, P: plus/optional
};

export type Package = {
  name: string;
  price: number | string;
  features: Feature[];
};