import { useEffect, useState } from "react";
import { AnimalCard } from "../components/AnimalCard";
import { AnimalGrid } from "../components/AnimalGrid";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { Animal } from "../interfaces/Animal";
import { LS } from "../util/localStorage";

export const Home = () => {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    setAnimals(LS.get("animals"));
  }, []);

  return (
    <>
      <Heading css={{ textAlign: "center" }}>Zoo</Heading>
      <Paragraph css={{ textAlign: "center", marginBottom: "$128" }}>
        Välkommen till vår virtuella djurpark.
        <br />
        Klicka på ett djur för att läsa mer om det.
      </Paragraph>
      <AnimalGrid>
        {animals &&
          animals.map((animal: Animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
      </AnimalGrid>
    </>
  );
};
