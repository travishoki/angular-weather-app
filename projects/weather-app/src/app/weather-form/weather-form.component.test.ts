import { createWeather, getRandomInt } from './weather-form.component';

test('createWeather', () => {
	const weatherObj = createWeather();
	const expectedResult = {
		id: 0,
		main: '',
		description: '',
		icon: '',
	};

	expect(weatherObj).toEqual(expectedResult);
});

test('getRandomInt', () => {
	const randomInt = getRandomInt();

	expect(Number.isInteger(randomInt)).toBe(true);
});
