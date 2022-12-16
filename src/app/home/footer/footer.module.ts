import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapTwitter,
  bootstrapInstagram,
  bootstrapYoutube,
  bootstrapFacebook,
} from '@ng-icons/bootstrap-icons';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      bootstrapTwitter,
      bootstrapInstagram,
      bootstrapYoutube,
      bootstrapFacebook,
    }),
  ],
  exports: [FooterComponent],
})
export class FooterModule {}
