import * as DialogPrimitive from "@radix-ui/react-dialog";
import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Flex } from "../components/Flex";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { Animal } from "../interfaces/Animal";
import { styled } from "../stitches.config";
import { getAnimalByName, updateAnimalData } from "../util/localStorage";

export const AnimalPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<"id">(); // Get the animal id from the url
  const [animal, setAnimal] = useState<Animal>(() =>
    getAnimalByName(id as string)
  );

  const feedAnimal = () => {
    const newAnimal: Animal = { ...animal, isFed: true, lastFed: new Date() };

    setAnimal(newAnimal);

    updateAnimalData(newAnimal);
  };

  return (
    <>
      {animal && (
        <Dialog defaultOpen onOpenChange={() => navigate(-1)}>
          <DialogContent>
            <Flex justify="between">
              <DialogTitle asChild>
                <Heading type="h2" as="h2">
                  {animal.name}
                </Heading>
              </DialogTitle>
              <DialogClose asChild>
                <Button>Stäng</Button>
              </DialogClose>
            </Flex>
            <ImageContainer>
              <Image src={animal.imageUrl} alt={`Bild på ${animal.name}`} />
            </ImageContainer>
            <Button
              disabled={animal.isFed}
              onClick={feedAnimal}
              type="primary"
              css={{ marginBottom: "$32", width: "100%" }}
            >
              {animal.isFed ? `${animal.name} är inte hungrig` : "Mata"}
            </Button>

            <Description>
              <Paragraph>{animal.longDescription}</Paragraph>
            </Description>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

const Backdrop = styled(DialogPrimitive.Overlay, {
  backgroundColor: "$pink12Alpha",
  position: "fixed",
  inset: 0,
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: "$white",
  borderRadius: "$8",
  boxShadow: "$medium",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "$512",
  maxHeight: "85vh",
  padding: "$32",
  overflow: "auto",
});

interface ContentProps {
  children: React.ReactNode;
}

const Content: FC<ContentProps> = ({ children, ...props }) => {
  return (
    <DialogPrimitive.Portal>
      <Backdrop />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
};

const Dialog = DialogPrimitive.Root;
const DialogContent = Content;
const DialogTitle = DialogPrimitive.Title;
const Description = DialogPrimitive.Description;
const DialogClose = DialogPrimitive.Close;

const ImageContainer = styled("div", {
  width: "100%",
  marginBottom: "$16",
});

const Image = styled("img", {
  borderRadius: "$8",
  marginY: "$32",
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
