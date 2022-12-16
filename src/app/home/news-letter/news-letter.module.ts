import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsLetterComponent } from './news-letter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewsLetterComponent],
  imports: [CommonModule, FormsModule],
  exports: [NewsLetterComponent],
})
export class NewsLetterModule {}
