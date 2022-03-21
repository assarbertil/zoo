// Create context to store animals from local storage as useState
import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import { Animal } from "../interfaces/Animal";
import { LS } from "../util/localStorage";

// Setup the context
export const AnimalContext = createContext<{
  animals: Animal[];
  setAnimals: React.Dispatch<React.SetStateAction<Animal[]>>;
  updateAnimal: (animal: Animal) => void;
}>({} as any);

// Main hook to get animals from context
export const useAnimals = () => {
  const { animals, setAnimals, updateAnimal } = useContext(AnimalContext);

  return { animals, setAnimals, updateAnimal };
};

// Provider component to wrap all components that need to access the context
export const AnimalProvider = ({ children }: { children: ReactNode }) => {
  const [animals, setAnimals] = useState<Animal[]>(LS.get("animals"));

  // Fetch animals if animals arent set to LS
  useEffect(() => {
    const LSanimals = LS.get("animals");
    if (LSanimals) return;

    const fetchAnimals = async () => {
      const response = await fetch(
        "https://animals.azurewebsites.net/api/animals"
      );
      const data: Animal[] = await response.json();

      setAnimals(data);
    };
    fetchAnimals();
  }, []);

  // Automatically set LS when animal state changes
  useEffect(() => {
    LS.set("animals", animals);
  }, [animals]);

  // Insert animal that should be updated
  const updateAnimal = (insertedAnimal: Animal) => {
    // Create new array of animals but update the one with inserted id
    const updatedAnimals = animals.map((animalInArray: Animal) => {
      if (animalInArray.id === insertedAnimal.id) {
        return insertedAnimal;
      }
      return animalInArray;
    });

    setAnimals(updatedAnimals);
  };

  return (
    <AnimalContext.Provider value={{ animals, setAnimals, updateAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
};
