import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherFormComponent } from './weather-form/weather-form.component';
import { HeaderComponent } from './header/header.component';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
	constructor(private sanitizer: DomSanitizer) { }

	transform(gif: string) {
		return this.sanitizer.bypassSecurityTrustResourceUrl(gif);
	}
}

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SafePipe,
		WeatherFormComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		NgbModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
