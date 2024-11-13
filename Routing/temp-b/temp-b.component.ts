import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-temp-b',
  standalone: true,
  imports: [],
  templateUrl: './temp-b.component.html',
  styleUrl: './temp-b.component.css'
})
export class TempBComponent {
  constructor(private router:Router)
    {}
  gototempa()
    {
      this.router.navigateByUrl("tempa");
    }
}
