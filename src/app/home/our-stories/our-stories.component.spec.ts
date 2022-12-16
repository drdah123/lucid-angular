import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStoriesComponent } from './our-stories.component';

describe('OurStoriesComponent', () => {
  let component: OurStoriesComponent;
  let fixture: ComponentFixture<OurStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
