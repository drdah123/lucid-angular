import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCarsCardComponent } from './compare-cars-card.component';

describe('CompareCarsCardComponent', () => {
  let component: CompareCarsCardComponent;
  let fixture: ComponentFixture<CompareCarsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareCarsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareCarsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
