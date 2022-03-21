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
      Rubik: "'Rubik', sans-serif",
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
      pink1: "#fffcfe",
      pink2: "#fff7fc",
      pink3: "#feeef8",
      pink4: "#fce5f3",
      pink5: "#f9d8ec",
      pink6: "#f3c6e2",
      pink7: "#ecadd4",
      pink8: "#e38ec3",
      pink9: "#d6409f",
      pink10: "#d23197",
      pink11: "#cd1d8d",
      pink12: "#3b0a2a",
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
