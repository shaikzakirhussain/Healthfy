import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeautyComponent } from './beauty/beauty.component';
import { FitnessComponent } from './fitness/fitness.component';
import { HomeComponent } from './home/home.component';
import { PersonalCareComponent } from './personal-care/personal-care.component';
import { VitaminsComponent } from './vitamins/vitamins.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'beauty', component:BeautyComponent},
  {path: 'fitness', component:FitnessComponent},
  {path: 'vitamins', component:VitaminsComponent},
  {path: 'personalcare', component:PersonalCareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
