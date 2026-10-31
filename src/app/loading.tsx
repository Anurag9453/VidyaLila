import React from "react";
import { BrandLoaderUI } from "@/components/BrandLoader";

export default function Loading() {
  return (
    <BrandLoaderUI
      message="Loading VidyaLila Study & Quiz Arena..."
      progress={80}
    />
  );
}
