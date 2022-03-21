import * as DialogPrimitive from "@radix-ui/react-dialog";
import { FC, useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Animal } from "../interfaces/Animal";
import { styled } from "../stitches.config";
import { getAnimalByName } from "../util/localStorage";

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "$pink12Alpha",
  position: "fixed",
  inset: 0,
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: "$white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 25,
});

interface ContentProps {
  children: React.ReactNode;
}

const Content: FC<ContentProps> = ({ children, ...props }) => {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
};

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  color: "$pink12",
  fontSize: 17,
});

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: "10px 0 20px",
  color: "$pink11",
  fontSize: 15,
  lineHeight: 1.5,
});

const Dialog = DialogPrimitive.Root;
const DialogContent = Content;
const DialogTitle = StyledTitle;
const DialogDescription = StyledDescription;
const DialogClose = DialogPrimitive.Close;

export const AnimalPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<"id">(); // Get the animal id from the url
  const [animal, setAnimal] = useState<Animal>(() =>
    getAnimalByName(id as string)
  );

  return (
    <>
      {animal && (
        <Dialog defaultOpen onOpenChange={() => navigate(-1)}>
          <DialogContent>
            <DialogTitle asChild>
              <Heading type="h2" as="h2">
                {animal.name}
              </Heading>
            </DialogTitle>
            <DialogDescription>{animal.longDescription}</DialogDescription>
            <DialogClose asChild>
              <Button>Stäng</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
