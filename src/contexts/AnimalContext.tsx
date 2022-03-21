// Create context to store animals from local storage as useState
import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import { Animal } from "../interfaces/Animal";
import { LS, setAnimalsOnLoad } from "../util/localStorage";

export const AnimalContext = createContext<Animal[]>([]);

export const AnimalProvider = ({ children }: { children: ReactNode }) => {
  const [animals, setAnimals] = useState(LS.get("animals"));

  useEffect(() => {
    setAnimalsOnLoad();
  }, []);

  useEffect(() => {
    LS.set("animals", animals);
  }, [animals]);

  return (
    <AnimalContext.Provider value={animals}>{children}</AnimalContext.Provider>
  );
};

export const useAnimals = () => {
  const animals = useContext(AnimalContext);

  return animals;
};
