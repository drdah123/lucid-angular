import { Component, OnInit, Input } from '@angular/core';
import { Story } from 'src/app/Types/Story';

@Component({
  selector: 'app-card-stories',
  templateUrl: './card-stories.component.html',
  styleUrls: ['./card-stories.component.css'],
})
export class CardStoriesComponent implements OnInit {
  @Input() story: Story = {} as Story;
  ngOnInit(): void {}
}
