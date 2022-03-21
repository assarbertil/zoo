import { Animal } from "../interfaces/Animal";

export const timeSinceFed = (animal: Animal) => {
  const now = new Date();
  const lastFed = new Date(animal.lastFed);
  const timeSinceFed = now.getTime() - lastFed.getTime();
  return Math.floor(timeSinceFed / (1000 * 60 * 60)); // Multiply miliseconds to hours
};

export const getAnimalByName = (animals: Animal[], name: string) => {
  return animals.find((animal: Animal) => animal.name === name);
};
