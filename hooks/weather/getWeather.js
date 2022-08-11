import useSWR from "swr";
import { fetcher } from "~/utils/fetcher";

const WEATHER_API_URL =
  "https://weather.tsukumijima.net/api/forecast/city/";

export const getWeather = (cityId) => {
  const { data, err } = useSWR(
    WEATHER_API_URL + cityId,
    fetcher
  );

  return {
    data,
    err
  };
}