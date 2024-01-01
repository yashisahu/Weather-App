import { useState } from "react";
import CityInput from "./components/CityInput";
import WeatherCard from "./components/WeatherCard";

const App = () => {
	const [city, setCity] = useState("");
	const [cityToShow, setCityToShow] = useState("Gorakhpur");

	const handleCityChange = (event) => {
		setCity(event.target.value);
	};

	const setCityForWeather = (event) => {
		event.preventDefault();
		setCityToShow(city);
	};

	return (
		<div className='text-white lg:w-screen mx-autoz flex gap-8 flex-col items-center justify-center bg-no-repeat bg-hero bg-cover w-screen h-screen overflow-hidden'>
			<CityInput
				city={city}
				handleCityChange={handleCityChange}
				handleCity={setCityForWeather}
			/>
			<WeatherCard city={cityToShow} />
		</div>
	);
};

export default App;
