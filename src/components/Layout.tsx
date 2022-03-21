import { styled } from "../stitches.config";

export const Layout = styled("div", {
  marginX: "auto",
  width: "100%",
  paddingTop: "$128",

  "@sm": { maxWidth: 640 },
  "@md": { maxWidth: 768 },
  "@lg": { maxWidth: 1024 },
});
