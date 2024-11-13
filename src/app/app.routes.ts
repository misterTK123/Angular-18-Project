import { Routes } from '@angular/router';
import { TempAComponent } from '../../Routing/temp-a/temp-a.component';
import { TempBComponent } from '../../Routing/temp-b/temp-b.component';

export const routes: Routes = [
  {
    path:'tempa',
    component:TempAComponent
  },
  {
    path:'tempb',
    component:TempBComponent
  }

];
