import { styled } from "../stitches.config";

export const Heading = styled("h1", {
  color: "$pink12",
  lineHeight: "$base",
  fontWeight: 600,

  variants: {
    type: {
      h1: { fontSize: "$h1" },
      h2: { fontSize: "$h2" },
      h3: { fontSize: "$h3" },
      h4: { fontSize: "$h4" },
      h5: { fontSize: "$h5" },
      h6: { fontSize: "$h6" },
    },
  },

  defaultVariants: { type: "h1" },
});
