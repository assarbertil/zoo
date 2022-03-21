import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAnimals } from "../contexts/AnimalContext";
import { Animal } from "../interfaces/Animal";
import { styled } from "../stitches.config";
import { timeSinceFed } from "../util/animalFunctions";
import { Button } from "./Button";
import { Flex } from "./Flex";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

interface Props {
  animal: Animal;
}

export const AnimalCard: FC<Props> = ({ animal }) => {
  let location = useLocation();
  const [timeSinceFedState, setTimeSinceFedState] = useState<number>(0);
  const [hungry, setHungry] = useState(false);
  const { animals } = useAnimals();

  useEffect(() => {
    setTimeSinceFedState(timeSinceFed(animal));
  }, [animal]);

  useEffect(() => {
    if (timeSinceFedState >= 240) {
      setHungry(true);
    }
  }, [timeSinceFedState]);

  // If global list of animals updates, check if time since fed is greater than 240
  useEffect(() => {
    if (timeSinceFedState <= 240) {
      setHungry(false);
    }
  }, [animals]);

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
          <Paragraph type="small">{hungry && "Hungrig"}</Paragraph>
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
