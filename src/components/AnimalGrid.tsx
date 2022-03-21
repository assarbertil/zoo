import { styled } from "../stitches.config";

export const AnimalGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(256px, 1fr))",
  gridGap: "$16",
  marginTop: "$64",
  marginBottom: "$64",
});
