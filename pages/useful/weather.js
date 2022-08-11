import { useState } from "react";
import { getWeather } from "~/hooks/weather/getWeather";
import { cities } from "~/services/weather/cities";

export default function Weather() {
  const [city, setCity] = useState(cities[0]);

  const { data, err } = getWeather(city.id);
  if (err) return <div>failed to load</div>;
  if (!data) return <div>now loading...</div>;

  return (
    <div>
      <select
        value={city.id}
        onChange={(e) =>
          setCity(cities.find((c) => c.id === Number(e.target.value)))
        }
      >
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>

      <h1>{data.title}</h1>
      {data.forecasts.map((forecast) => (
        <ul key={forecast.dateLabel}>
          <li key={forecast.date}>{forecast.date}</li>
          <ul>
            <li key={forecast.telop}>{forecast.telop}</li>
          </ul>
        </ul>
      ))}
    </div>
  );
}
