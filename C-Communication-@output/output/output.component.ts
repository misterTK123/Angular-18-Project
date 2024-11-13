import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  
@Output() message= new EventEmitter();
senddata()
{
  this.message.emit("Message from Childside information");
}
}
