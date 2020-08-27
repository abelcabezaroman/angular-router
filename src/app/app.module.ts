import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './shared/components/hello-world/hello-world.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ButtonComponent } from "./shared/components/button/button.component";
import { ParagraphComponent } from "./shared/components/paragraph/paragraph.component";
import { FirstDetailPageComponent } from './pages/first-page/pages/first-detail-page/first-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    FirstPageComponent,
    SecondPageComponent,
    HomePageComponent,
    ButtonComponent,
    ParagraphComponent,
    HelloWorldComponent,
    FirstDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
