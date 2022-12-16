import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsProjectComponent } from './cars-project.component';

describe('CarsProjectComponent', () => {
  let component: CarsProjectComponent;
  let fixture: ComponentFixture<CarsProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
