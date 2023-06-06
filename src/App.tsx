import {
  wishingContriesAtom,
  visitedCountriesAtom,
  likingCountriesAtom,
} from "./atom";

export default function App() {
  return (
    <main>
      <h2>내가 가고싶은 나라들</h2>
      <form>
        <input placeholder="이름" />
        <button>가자!</button>
      </form>
      <h2>내가 가본 나라들</h2>
      <h2>내가 좋아하는 나라들</h2>
    </main>
  );
}
