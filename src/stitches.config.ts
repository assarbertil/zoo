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

    sizes: {
      1: "0.0625rem",
      2: "0.125rem",
      4: "0.25rem",
      8: "0.5rem",
      16: "1rem",
      24: "1.5rem",
      32: "2rem",
      48: "3rem",
      64: "4rem",
      128: "8rem",
      256: "16rem",
      512: "32rem",
    },

    space: {
      1: "0.0625rem",
      2: "0.125rem",
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

    radii: {
      4: "0.25rem",
      8: "0.5rem",
      16: "1rem",
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

      pink12Alpha: "hsla(321, 99.8%, 10.0%, 0.5)",

      white: "#fff",
      shadowLowColor: "hsl(322 75.0% 46.0% / 0.3)",
      shadowMediumColor: "hsl(322 75.0% 46.0% / 0.3)",
    },

    shadows: {
      low: "0 0.5px 0.7px $colors$shadowLowColor, 0 0.8px 1px -1.2px $colors$shadowLowColor, 0 2px 2.5px -2.5px $colors$shadowLowColor",

      medium:
        "0 0.5px 0.7px $colors$shadowMediumColor, 0 1.6px 2px -0.8px $colors$shadowMediumColor, 0 4.1px 5.2px -1.7px $colors$shadowMediumColor, 0 10px 12.6px -2.5px $colors$shadowMediumColor",
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
    marginY: (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    marginX: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    paddingX: (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
