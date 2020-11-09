import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { WeatherFormComponent } from './weather-form.component';
import { createWeather, getRandomInt } from './weather-form.component';
import { mockPipe } from '../../mocks/mockPipe';

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

describe('WeatherFormComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ReactiveFormsModule],
			declarations: [
				WeatherFormComponent,
				mockPipe({ name: 'safe' })
			],
		}).compileComponents();
	}));

	it('should create the component', () => {
		const fixture = TestBed.createComponent(WeatherFormComponent);
		const app = fixture.debugElement.componentInstance;

		expect(app).toBeTruthy();
	});
});
