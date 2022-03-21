import { styled } from "../stitches.config";

export const AnimalGrid = styled("div", {
  display: "grid",
  gridGap: "$16",
  paddingX: "$16",

  gridTemplateColumns: "1fr",
  "@md": { gridTemplateColumns: "repeat(2, 1fr)" },
  "@lg": { gridTemplateColumns: "repeat(3, 1fr)" },
  "@xl": { gridTemplateColumns: "repeat(4, 1fr)" },
});
