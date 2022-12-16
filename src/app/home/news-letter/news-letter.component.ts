import { Component } from '@angular/core';
import { Form } from 'src/app/Types/auth';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.css'],
})
export class NewsLetterComponent {
  isEmailFocused = false;
  isWannaJoinMailList = false;
  form = {} as Form;

  onFocused() {
    this.isEmailFocused = true;
  }

  wannaJoinMailList() {
    this.isWannaJoinMailList = !this.isWannaJoinMailList;
  }
  onSubmit() {}
}
