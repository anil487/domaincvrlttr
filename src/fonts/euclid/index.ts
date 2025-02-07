import localFont from "next/font/local";

export const euclidCircularA = localFont({
  src: [
    {
      path: "./Euclid Circular A Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Euclid Circular A Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Euclid Circular A Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Euclid Circular A Light Italic.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Euclid Circular A Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Euclid Circular A Medium Italic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Euclid Circular A SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Euclid Circular A SemiBold Italic.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "./Euclid Circular A Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Euclid Circular A Bold Italic.woff",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});
