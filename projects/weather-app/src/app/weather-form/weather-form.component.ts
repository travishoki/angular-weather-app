import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { WeatherFormConstants } from './weather-form.component-constants';

interface Weather {
	description: string;
	id: number;
	icon: string;
	main: string;
}

const createWeather = (id: number = 0, main: string = '', description: string = '', icon: string = '') : Weather => {
	return {
		description,
		id,
		icon,
		main,
	};
};

const getRandomInt = (max: number = 0) => {
	return Math.floor(Math.random() * Math.floor(max));
}

@Component({
	selector: 'app-weather-form',
	templateUrl: './weather-form.component.html',
	styleUrls: ['./weather-form.component.scss']
})
export class WeatherFormComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	errorMessage = null;

	gif = '';

	loadingGif = true;

	loadingWeather = false;

	statesList = WeatherFormConstants.statesList;

	weather = createWeather();

	form = new FormGroup({
		city: new FormControl('', Validators.required),
		state: new FormControl('', Validators.required),
	});

	getGif(str: string) {
		const gifApiKey = '71G6e4FSA3npSbsGnYdH7tvDeExKVgsb';
		const offset = getRandomInt(25);
		const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=${gifApiKey}&q=${str}&limit=1&offset=${offset}&rating=g&lang=en`

		this.loadingGif = true;

		fetch(gifUrl)
			.then((response) => response.json())
			.then((data) => {
				this.gif = data.data[0].embed_url;
				this.loadingGif = false;
			})
	}

	submit() {
		const { city, state } = this.form.value;
		const weatherApiKey = 'c574c5835383440bcc0d8af84b4736cf';
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${weatherApiKey}`;

		this.loadingWeather = true;

		fetch(url)
			.then((response) => {
				if (!response.ok) {
			        throw new Error(response.statusText);
			    } else {
					return response.json();
			    }
			})
			.then((data) => {
				this.errorMessage = null;
				this.loadingWeather = false;
				this.weather = data.weather[0];
				this.getGif(this.weather.description);
			})
			.catch((response) => {
				this.errorMessage = response.message;
				this.loadingWeather = false;
				this.weather = createWeather();
				this.getGif('error');
			});
	}
}
