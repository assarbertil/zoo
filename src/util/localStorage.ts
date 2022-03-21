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
