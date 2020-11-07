import { getRandomInt } from './weather-form.component';

test('getRandomInt', () => {
	const randomInt = getRandomInt();

	expect(Number.isInteger(randomInt)).toBe(true);
});
