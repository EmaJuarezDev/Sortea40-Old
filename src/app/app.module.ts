import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SectionModule } from './section/section.module';

@NgModule({
  imports: [BrowserModule, FormsModule, SectionModule],
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
