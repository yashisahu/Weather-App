import axios from "axios";
import { useEffect, useState } from "react";
import errlogo from '../assets/595067.png'
const WeatherCard = ({ city }) => {
	const [weatherInfo, setWeatherInfo] = useState();
	const [validFlag, setValidFlag] = useState(false);
	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
			)
			.then((res) => {
				setValidFlag(true);
				setWeatherInfo(res.data);
			})
			.catch((err) => {
				setValidFlag(false);
			});
	}, [city]);

	return validFlag ? (
		<div className='backdrop-filter bg-gray-800 backdrop-blur-sm bg-opacity-60 lg:w-1/3 md:w-1/2 md:p-12 justify-evenly p-6 lg:gap-6  flex  flex-col lg:h-1/2  h-fit rounded-xl w-4/5'>
			<div className='lg:h-1/3 flex items-center'>
				<img
					className='w-1/2 '
					src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
					alt=''
				/>
				<h2 className='justify-self-center text-4xl font-bold'>
					{weatherInfo.main.temp}&#176;C
				</h2>
			</div>
			<div>
				<h2 className='text-2xl lg:text-4xl font-bold'>{weatherInfo.name}</h2>
				<p className='mt-4 lg:text-xl font-semibold text-lg'>
					Feels like {weatherInfo.main.feels_like}&#176;C,{" "}
					{weatherInfo.weather[0].description}, wind speed is{" "}
					{weatherInfo.wind.speed} m/s
				</p>
			</div>
		</div>
	) : (
		<div className='backdrop-filter bg-gray-800 backdrop-blur-sm bg-opacity-60 lg:w-1/3 md:w-1/2 md:p-12 text-center p-6 lg:gap-6 items-center justify-center flex  flex-col lg:h-1/2  h-fit rounded-xl w-4/5'>
                <img className="w-1/2" src={errlogo} alt='' />
                <h2 className="text-xl font-bold">Not a valid city, please try again</h2>
		</div>
	);
};

export default WeatherCard;
