import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { StudentcomponentComponent } from './studentcomponent/studentcomponent.component';

const routes: Routes = [
{path:'student',component:StudentcomponentComponent},
{path:'department',component:DepartmentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
