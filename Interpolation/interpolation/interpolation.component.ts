import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {

  name="tahir";
  currentyear= new Date().getFullYear();
  currentmonth= new Date().getMonth();
  bydefult="Please enter the name";

}
