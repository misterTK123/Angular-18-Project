import { Component} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ComponentWithinComponentComponent } from "../../addcomponent/component-within-component/component-within-component.component";
import { ControlFlowStatmentComponent } from "../../Controlstatment/control-flow-statment/control-flow-statment.component";
import { InterpolationComponent } from '../../Interpolation/interpolation/interpolation.component';
import { LoopsComponent } from '../../Cntr-flow-@loops/loops/loops.component';
import { BindingComponent } from '../../Binding/binding/binding.component';
import { TempAComponent } from "../../Routing/temp-a/temp-a.component";
import { TempBComponent } from "../../Routing/temp-b/temp-b.component";
import { ReactiveformComponent } from '../../ReactiveForm/reactiveform/reactiveform.component';
import { InputComponent } from '../../C-Communication-@input/input/input.component';
import { OutputComponent } from "../../C-Communication-@output/output/output.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, InputComponent,OutputComponent, ReactiveformComponent, ComponentWithinComponentComponent, ControlFlowStatmentComponent, InterpolationComponent, LoopsComponent, BindingComponent, TempAComponent, TempBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'AngularProject';
  
  message="";
recivemessage(message:string)
{
   this.message=message;
}
 
}
