import { Animal } from "../interfaces/Animal";

// Basic local storage fns
export const LS = {
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key: string) {
    const raw = localStorage.getItem(key) || "{}"; // Returns string of LS key
    const parsed = JSON.parse(raw); // Returns parsed object
    return raw === "{}" ? null : parsed; // Returns null if empty
  },
};

// Runs on page load
export const setAnimalsOnLoad = async () => {
  const animals = LS.get("animals");
  if (animals) return;

  const response = await fetch("https://animals.azurewebsites.net/api/animals");
  const data = await response.json();
  LS.set("animals", data);
};

// Insert animal that should be updated
export const updateAnimalData = (insertedAnimal: Animal) => {
  const animals = LS.get("animals");

  // Create new array of animals but update the one with inserted id
  const updatedAnimals = animals.map((animalInArray: Animal) => {
    if (animalInArray.id === insertedAnimal.id) {
      return insertedAnimal;
    }
    return animalInArray;
  });

  LS.set("animals", updatedAnimals);
};
