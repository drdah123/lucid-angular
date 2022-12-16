import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCardProjectComponent } from './car-card-project.component';

describe('CarCardProjectComponent', () => {
  let component: CarCardProjectComponent;
  let fixture: ComponentFixture<CarCardProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarCardProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarCardProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
