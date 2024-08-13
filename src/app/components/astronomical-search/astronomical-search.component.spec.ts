import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomicalSearchComponent } from './astronomical-search.component';

describe('AstronomicalSearchComponent', () => {
  let component: AstronomicalSearchComponent;
  let fixture: ComponentFixture<AstronomicalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstronomicalSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstronomicalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
