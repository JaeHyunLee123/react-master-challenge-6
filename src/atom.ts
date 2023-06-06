import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom: wishingLocal } = recoilPersist({
  key: "wishing-countries",
  storage: localStorage,
});

const { persistAtom: visitedLocal } = recoilPersist({
  key: "visited-countries",
  storage: localStorage,
});

const { persistAtom: likingLocal } = recoilPersist({
  key: "liking-countries",
  storage: localStorage,
});

export const wishingCountriesAtom = atom<string[]>({
  key: "wishingCountries",
  default: [],
  effects_UNSTABLE: [wishingLocal],
});

export const visitedCountriesAtom = atom<string[]>({
  key: "visitedCountries",
  default: [],
  effects_UNSTABLE: [visitedLocal],
});

export const likingCountriesAtom = atom<string[]>({
  key: "likingCountries",
  default: [],
  effects_UNSTABLE: [likingLocal],
});
