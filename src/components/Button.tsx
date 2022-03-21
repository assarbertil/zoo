import { styled } from "../stitches.config";

export const Button = styled("button", {
  border: 0,
  paddingX: "$16",
  paddingY: "$8",
  borderRadius: "$4",
  fontFamily: "$Rubik",
  fontSize: "$h5",
  cursor: "pointer",

  "&:disabled": {
    opacity: 0.5,
  },

  variants: {
    type: {
      primary: {
        backgroundColor: "$pink9",
        color: "$white",
        "&:hover": { backgroundColor: "$pink10" },
      },
      secondary: {
        backgroundColor: "$pink4",
        color: "$pink11",
        "&:hover": { backgroundColor: "$pink5" },
        "&:active": { backgroundColor: "$pink6" },
      },
    },
  },
  defaultVariants: {
    type: "secondary",
  },
});
