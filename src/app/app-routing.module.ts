import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentcomponentComponent } from './studentcomponent/studentcomponent.component';

const routes: Routes = [
{path:'student',component:StudentcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
