import { styled } from "../../stitches.config";

export const Container = styled("div", {
  marginX: "auto",
  width: "100%",

  "@sm": { maxWidth: 640 },
  "@md": { maxWidth: 768 },
  "@lg": { maxWidth: 1024 },
  "@xl": { maxWidth: 1280 },
});
