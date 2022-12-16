import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStoriesComponent } from './card-stories.component';

describe('CardStoriesComponent', () => {
  let component: CardStoriesComponent;
  let fixture: ComponentFixture<CardStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
