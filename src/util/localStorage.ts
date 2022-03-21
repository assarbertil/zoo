// Reusable functions, exported just in case
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

export const setAnimalsOnLoad = async () => {
  const animals = LS.get("animals");
  if (animals) return;

  const response = await fetch("https://animals.azurewebsites.net/api/animals");
  const data = await response.json();
  LS.set("animals", data);
};
