import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

	loading = false;

	weather = null;

	form = new FormGroup({
		city: new FormControl('', Validators.required),
		state: new FormControl('', Validators.required),
	});

	statesList = [
		'Alabama',
		'Alaska',
		'Arizona',
		'Arkansas',
		'California',
		'Colorado',
		'Connecticut',
		'Delaware',
		'Florida',
		'Georgia',
		'Hawaii',
		'Idaho',
		'Illinois',
		'Indiana',
		'Iowa',
		'Kansas',
		'Kentucky',
		'Louisiana',
		'Maine',
		'Maryland',
		'Massachusetts',
		'Michigan',
		'Minnesota',
		'Mississippi',
		'Missouri',
		'Montana',
		'Nebraska',
		'Nevada',
		'New Hampshire',
		'New Jersey',
		'New Mexico',
		'New York',
		'North Carolina',
		'North Dakota',
		'Ohio',
		'Oklahoma',
		'Oregon',
		'Pennsylvania',
		'Rhode Island',
		'South Carolina',
		'South Dakota',
		'Tennessee',
		'Texas',
		'Utah',
		'Vermont',
		'Virginia',
		'Washington',
		'West Virginia',
		'Wisconsin',
		'Wyoming',
	];

	submit() {
		const { city, state } = this.form.value;
		const apiKey = 'c574c5835383440bcc0d8af84b4736cf';
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apiKey}`;

		this.loading = true;

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
				this.loading = false;
				this.weather = data.weather[0];
			})
			.catch((response) => {
				this.errorMessage = response.message;
				this.loading = false;
				this.weather = null;
			});
	}
}
