// app.component.spec.ts
import { TestBed, async } from '@angular/core/testing';
import { MockComponent } from 'ng2-mock-component';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				MockComponent({
					selector: 'app-header',
				}),
				MockComponent({
					selector: 'app-weather-form'
				}),
				MockComponent({
					selector: 'router-outlet'
				})
			],
		}).compileComponents();
	}));

	it('should create the component', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;

		expect(app).toBeTruthy();
	});


	it(`should have as title 'angular-component-testing'`, () => {  //5
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;

		expect(app.title).toEqual('Weather App');
    });
});
