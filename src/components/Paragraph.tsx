import { styled } from "../../stitches.config";

export const Header = styled("p", {
  color: "$plum11",
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
