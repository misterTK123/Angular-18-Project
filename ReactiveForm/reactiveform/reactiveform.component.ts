import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
Email="";
Password="";
constructor()
{
this.save();
}
login:FormGroup= new FormGroup({});
save(){
    this.login = new FormGroup({
     email: new FormControl(this.Email),
     password:new FormControl(this.Password)
   });
}
}
