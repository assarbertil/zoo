import { styled } from "../stitches.config";

export const Paragraph = styled("p", {
  color: "$pink11",
  lineHeight: "$base",
  fontWeight: 400,

  variants: {
    type: {
      large: { fontSize: "$largeBody" },
      base: { fontSize: "$body" },
      small: { fontSize: "$smallBody" },
    },
  },

  defaultVariants: { type: "body" },
});
