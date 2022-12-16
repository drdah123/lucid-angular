import { Component } from '@angular/core';
import { OurStories } from 'src/assets/data/data';

@Component({
  selector: 'app-our-stories',
  templateUrl: './our-stories.component.html',
  styleUrls: ['./our-stories.component.css'],
})
export class OurStoriesComponent {
  OurStories = OurStories;
}
