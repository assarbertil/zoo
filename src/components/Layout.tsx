import { styled } from "../stitches.config";

export const Layout = styled("div", {
  marginX: "auto",
  width: "100%",
  paddingTop: "$256",

  "@sm": { maxWidth: 640 },
  "@md": { maxWidth: 768 },
});
