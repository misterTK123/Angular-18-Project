import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

name="imran";
type="text";
placeholder="Enter the name";
myclass:string="background-color:red";
alerts()
{
  alert("this is methode binding");
}
stdname="";
}
