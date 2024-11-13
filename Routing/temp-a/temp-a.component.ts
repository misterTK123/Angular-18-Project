import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TempBComponent } from '../temp-b/temp-b.component';

@Component({
  selector: 'app-temp-a',
  standalone: true,
  imports: [RouterLink,TempBComponent],
  templateUrl: './temp-a.component.html',
  styleUrl: './temp-a.component.css'
})
export class TempAComponent {

}
