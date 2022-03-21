import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Animal } from "../interfaces/Animal";
import { styled } from "../stitches.config";
import { Button } from "./Button";
import { Flex } from "./Flex";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

interface Props {
  animal: Animal;
}

export const AnimalCard: FC<Props> = ({ animal }) => {
  let location = useLocation();

  return (
    <CardContainer
      to={animal.name}
      // This is the trick! Set the `backgroundLocation` in location state
      // so that when we open the modal we still see the current page in
      // the background.
      state={{ backgroundLocation: location }}
    >
      <div>
        <Flex justify="between">
          <Heading
            type="h6"
            as="h2"
            css={{
              marginBottom: "$16",
            }}
          >
            {animal.name}
          </Heading>
          <Paragraph type="small">180min</Paragraph>
        </Flex>
        <ImageContainer>
          <Image src={animal.imageUrl} alt={`Bild på ${animal.name}`} />
        </ImageContainer>
        <Heading type="h6" as="h3" css={{ color: "$pink11" }}>
          Om mig
        </Heading>
        <Paragraph type="small" css={{ marginTop: "$8", marginBottom: "$32" }}>
          {animal.shortDescription}
        </Paragraph>
      </div>
      <Button>Min sida</Button>
    </CardContainer>
  );
};

// Below are only styled components

const ImageContainer = styled("div", {
  width: "100%",
  marginBottom: "$16",
});

const Image = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  aspectRatio: "4 / 3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$pink11",
});

const CardContainer = styled(Link, {
  textDecoration: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "$white",
  padding: "$16",
  borderRadius: "$8",
  boxShadow: "$low",
  transition: "box-shadow 0.5s ease-out, transform 0.5s ease-out",

  "&:hover": {
    boxShadow: "$medium",
    transform: "translateY(-0.25rem)",
    transition: "all 0.02s ease-out",
  },
});
