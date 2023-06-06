import { atom } from "recoil";

export const wishingContriesAtom = atom<string[]>({
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
