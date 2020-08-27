import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from "./pages/first-page/first-page.component";
import { SecondPageComponent } from "./pages/second-page/second-page.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { FirstDetailPageComponent } from "./pages/first-page/pages/first-detail-page/first-detail-page.component";


const routes: Routes = [
  {
    path: '', component: HomePageComponent
  }, {
    path: 'first-page', component: FirstPageComponent
  }, {
    path: 'first-page/:text', component: FirstDetailPageComponent
  }, {
    path: 'second-page', component: SecondPageComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
