import { atom } from "recoil";

export const wishingCountriesAtom = atom<string[]>({
  key: "wishingCountries",
  default: [],
});

export const visitedCountriesAtom = atom<string[]>({
  key: "visitedCountries",
  default: [],
});

export const likingCountriesAtom = atom<string[]>({
  key: "likingCountries",
  default: [],
});
