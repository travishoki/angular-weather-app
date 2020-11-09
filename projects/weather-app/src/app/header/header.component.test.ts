import { TestBed, async } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				HeaderComponent
			],
		}).compileComponents();
	}));

	it('should create the component', () => {
		const fixture = TestBed.createComponent(HeaderComponent);
		const app = fixture.debugElement.componentInstance;

		expect(app).toBeTruthy();
	});

	it('should render title in a h1 tag', () => {
		const fixture = TestBed.createComponent(HeaderComponent);
		fixture.detectChanges();

		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Weather App');
	});
});
