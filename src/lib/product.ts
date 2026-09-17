// Single source of truth for product data. Only specs that are clearly
// visible/readable on the uploaded reference photography are included —
// see /public/product for the source images.

export type ColorId = "black" | "red";

export interface ColorOption {
  id: ColorId;
  label: string;
  swatch: string;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export const colorOptions: ColorOption[] = [
  { id: "black", label: "Onyx Black", swatch: "#0a0a0c" },
  { id: "red", label: "Crimson Red", swatch: "#b91c2b" },
];

export const productImages = {
  heroPair: {
    src: "/product/hero-pair-angle.jpg",
    alt: "Two 50,000mAh power banks in black and red, mirror-glass finish",
  },
  heroIsolated: {
    src: "/product/hero-isolated-red.jpg",
    alt: "Crimson red 50,000mAh power bank on isolated background",
  },
  portsDetail: {
    src: "/product/ports-detail-cable.jpg",
    alt: "Close-up of the power bank's port cluster and integrated cable",
  },
  lifestyleCharging: {
    src: "/product/lifestyle-phone-charging.jpg",
    alt: "Power bank charging a smartphone, battery display reading 100%",
  },
  stackedPair: {
    src: "/product/stacked-ports-pair.jpg",
    alt: "Black and red power banks stacked, showing the port layout",
  },
  compatibility: {
    src: "/product/compatibility-devices.jpg",
    alt: "Power bank surrounded by a phone and tablet it can charge",
  },
  colorLineup: {
    src: "/product/color-lineup.jpg",
    alt: "Red, black, and silver power bank color options side by side",
  },
  portsInfographic: {
    src: "/product/ports-infographic.jpg",
    alt: "Diagram of the power bank's input and output ports",
  },
} satisfies Record<string, ProductImage>;

export const product = {
  id: "powerbank-50000",
  slug: "50000mah-power-bank",
  name: "50,000mAh Power Bank",
  brand: "Voltcell",
  tagline: "Save your time. Don't stress.",
  price: 49.99,
  compareAtPrice: 69.99,
  currency: "USD",

  capacityMah: 50000,

  // Directly visible on the reference photography.
  outputs: 4,
  inputs: 3,
  inputTypes: ["USB-C", "Micro-USB", "Lightning"] as const,
  outputPortType: "USB-A" as const,
  hasDisplay: true,
  displayType: "LED percentage readout" as const,
  hasIntegratedCable: true,
  finish: "Mirror-glass panel",

  colors: colorOptions,
  defaultColor: "black" as ColorId,
} as const;

export const specs: { label: string; value: string }[] = [
  { label: "Capacity", value: "50,000mAh" },
  { label: "Inputs", value: "USB-C, Micro-USB, Lightning" },
  { label: "Outputs", value: "4x USB-A" },
  { label: "Display", value: "LED battery percentage readout" },
  { label: "Cable", value: "Integrated charging cable included" },
  { label: "Finish", value: "Mirror-glass panel" },
  { label: "Colors", value: "Onyx Black, Crimson Red" },
];
