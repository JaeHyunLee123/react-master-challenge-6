import { useRecoilState } from "recoil";
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

  const { register, handleSubmit, formState, reset } = useForm<IData>();

  const [wishingCountries, setWishingCountries] =
    useRecoilState(wishingCountriesAtom);
  const [visitedCountries, setVisitedCountries] =
    useRecoilState(visitedCountriesAtom);
  const [likingCountries, setLikingCountries] =
    useRecoilState(likingCountriesAtom);

  const onValidSubmit = (data: IData) => {
    setWishingCountries((current) => [...current, data.country]);
    reset();
  };

  const deleteWishingCountry = (index: number) => {
    const copied = [...wishingCountries];
    const deleted = wishingCountries[index];
    copied.splice(index, 1);
    setWishingCountries(copied);
    return deleted;
  };

  const deleteVisitedCountry = (index: number) => {
    const copied = [...visitedCountries];
    const deleted = visitedCountries[index];
    copied.splice(index, 1);
    setVisitedCountries(copied);
    return deleted;
  };

  const deleteLikingCountry = (index: number) => {
    const copied = [...likingCountries];
    const deleted = likingCountries[index];
    copied.splice(index, 1);
    setLikingCountries(copied);
    return deleted;
  };

  return (
    <main>
      <h2>내가 가고싶은 나라들</h2>
      <form onSubmit={handleSubmit(onValidSubmit)}>
        <input
          {...register("country", {
            required: "😟 required!",
          })}
          placeholder="이름"
        />
        <span>{formState.errors?.country?.message}</span>
        <button>가자!</button>
        {wishingCountries.map((country, index) => (
          <div key={index}>
            <span>{country}</span>
            <span
              onClick={() => {
                const temp = deleteWishingCountry(index);
                setVisitedCountries((current) => [...current, temp]);
              }}
            >
              ✅
            </span>
            <span
              onClick={() => {
                deleteWishingCountry(index);
              }}
            >
              🗑
            </span>
          </div>
        ))}
      </form>
      <h2>내가 가본 나라들</h2>
      {visitedCountries.map((country, index) => (
        <div key={index}>
          <span>{country}</span>
          <span
            onClick={() => {
              const temp = deleteVisitedCountry(index);
              setLikingCountries((current) => [...current, temp]);
            }}
          >
            👍
          </span>
          <span
            onClick={() => {
              const temp = deleteVisitedCountry(index);
              setWishingCountries((current) => [...current, temp]);
            }}
          >
            ❌
          </span>
        </div>
      ))}
      <h2>내가 좋아하는 나라들</h2>
      {likingCountries.map((country, index) => (
        <div key={index}>
          <span>{country}</span>
          <span
            onClick={() => {
              const temp = deleteLikingCountry(index);
              setVisitedCountries((current) => [...current, temp]);
            }}
          >
            👎
          </span>
        </div>
      ))}
    </main>
  );
}
