export const LS = {
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key: string) {
    return JSON.parse(localStorage.getItem(key) || "");
  },
};
