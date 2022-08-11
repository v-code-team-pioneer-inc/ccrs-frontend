import useSWR from "swr";
import { fetcher } from "~/utils/fetcher";

const WEATHER_API_URL =
  "https://weather.tsukumijima.net/api/forecast/city/130010";

export const getWeather = () => {
  const { data, err } = useSWR(
    WEATHER_API_URL,
    fetcher
  );

  return {
    data,
    err
  };
}