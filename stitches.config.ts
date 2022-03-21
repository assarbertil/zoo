import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      system:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    },
    fontSizes: {
      h1: "3rem",
      h2: "2rem",
      h3: "1.5rem",
      h4: "1.25rem",
      h5: "1rem",
      h6: "0.875rem",

      largeBody: "1.25rem",
      body: "1rem",
      smallBody: "0.875rem",
    },
    lineHeights: { base: 1.5 },

    space: {
      4: "0.25rem",
      8: "0.5rem",
      16: "1rem",
      24: "1.5rem",
      32: "2rem",
      48: "3rem",
      64: "4rem",
      128: "8rem",
      256: "16rem",
    },

    colors: {
      plum1: "#fefcff",
      plum2: "#fff8ff",
      plum3: "#fceffc",
      plum4: "#f9e5f9",
      plum5: "#f3d9f4",
      plum6: "#ebc8ed",
      plum7: "#dfafe3",
      plum8: "#cf91d8",
      plum9: "#ab4aba",
      plum10: "#a43cb4",
      plum11: "#9c2bad",
      plum12: "#340c3b",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
  },
  utils: {
    marginX: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
});
