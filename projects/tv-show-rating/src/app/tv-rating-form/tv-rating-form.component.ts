import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-tv-rating-form',
	templateUrl: './tv-rating-form.component.html',
	styleUrls: ['./tv-rating-form.component.scss']
})

export class TvRatingFormComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	weather = null;

	form = new FormGroup({
		city: new FormControl('', Validators.required),
	});

	submit() {
		const { city } = this.form.value;

		const apiKey = 'c574c5835383440bcc0d8af84b4736cf';
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				this.weather = data.weather[0];
			});
	}
}
