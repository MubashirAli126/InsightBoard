import { Package, Feature } from "../types";

function normalizeFeatures(features: string[] | Feature[]): Feature[] {
  if (typeof features[0] === "string") {
    return (features as string[]).map((f) => ({
      title: f,
      description: "",
      status: "C",
    }));
  }
  return features as Feature[];
}

export function normalizePackages(packages: any[]): Package[] {
  return packages.map((pkg) => ({
    ...pkg,
    features: normalizeFeatures(pkg.features),
  }));
}
