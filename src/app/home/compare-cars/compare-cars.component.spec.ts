import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCarsComponent } from './compare-cars.component';

describe('CompareCarsComponent', () => {
  let component: CompareCarsComponent;
  let fixture: ComponentFixture<CompareCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
