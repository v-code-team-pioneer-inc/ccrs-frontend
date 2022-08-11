import { getWeather } from "~/hooks/weather/getWeather";

export default function Weather() {
  const { data, err } = getWeather();
  if (err) return <div>failed to load</div>;
  if (!data) return <div>now loading...</div>;

  return (
    <div>
      <h1>{ data.title }</h1>
      {data.forecasts.map((forecast) => (
        <ul>
          <li key={ forecast.date }>{ forecast.date }</li>
          <ul>
            <li key={ forecast.telop }>{ forecast.telop }</li>
          </ul>
        </ul>
      ))}
    </div>
  );
}
