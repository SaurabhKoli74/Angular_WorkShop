import { Component } from '@angular/core';
import { StudentModel } from './student.model';

@Component({
  selector: 'app-studentcomponent',
  templateUrl: './studentcomponent.component.html',
  styleUrls: ['./studentcomponent.component.css']
})
export class StudentcomponentComponent {
  title = 'Student Details';

  stdObj:StudentModel = new StudentModel();
}
