const CityInput = ({ city, handleCityChange, handleCity }) => {
	return (
		<form className='lg:w-1/3 w-4/5 md:w-1/2 ' onSubmit={handleCity}>
			<input
				value={city}
				onChange={handleCityChange}
				className='h-16 text-xl backdrop-blur bg-opacity-70 bg-gray-800 w-full px-6 font-bold rounded-xl focus:outline-none'
				type='text'
				placeholder='Enter city'
			/>
		</form>
	);
};

export default CityInput;
