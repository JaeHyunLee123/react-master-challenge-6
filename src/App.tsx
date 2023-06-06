import { useRecoilValue, useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import {
  wishingCountriesAtom,
  visitedCountriesAtom,
  likingCountriesAtom,
} from "./atom";

export default function App() {
  interface IData {
    country: string;
  }

  const { register, handleSubmit, formState } = useForm<IData>();

  const wishingCountries = useRecoilValue(wishingCountriesAtom);
  const visitedCountries = useRecoilValue(visitedCountriesAtom);
  const likingCountries = useRecoilValue(likingCountriesAtom);

  const setWishingCountries = useSetRecoilState(wishingCountriesAtom);
  const setvisitedCountries = useSetRecoilState(visitedCountriesAtom);
  const setlikingCountries = useSetRecoilState(likingCountriesAtom);

  const addWishingCountry = (data: IData) => {
    setWishingCountries((current) => [...current, data.country]);
  };

  const deleteCountry = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    const temp = [...wishingCountries];
    temp.splice(index, 1);
    setWishingCountries(temp);
  };

  return (
    <main>
      <h2>내가 가고싶은 나라들</h2>
      <form onSubmit={handleSubmit(addWishingCountry)}>
        <input
          {...register("country", { required: true })}
          placeholder="이름"
        />
        <button>가자!</button>
        {wishingCountries.map((country, index) => (
          <div key={index}>
            <h3>{country}</h3>
            <span
              onClick={(event) => {
                deleteCountry(event, index);
              }}
            >
              ❌
            </span>
          </div>
        ))}
      </form>
      {/* <h2>내가 가본 나라들</h2>
      <h2>내가 좋아하는 나라들</h2> */}
    </main>
  );
}
