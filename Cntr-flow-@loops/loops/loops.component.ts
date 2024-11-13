import { Component } from '@angular/core';

@Component({
  selector: 'app-loops',
  standalone: true,
  imports: [],
  templateUrl: './loops.component.html',
  styleUrl: './loops.component.css'
})
export class LoopsComponent {
     data=[{
      name:"Ali",
      fname:"Hadayat",
      gender:"Male",
      cuntry:"pakistan",
      cast:"masood",
      cnic:'12201-3096848-5'
     }]
     studentdata: string[]= ['india','pakistan','china'];
    studentdatalist:any[]=[
      {id:1,name:"ali",age:10},
      {id:2,name:"salman",age:12},
      {id:3,name:"shan",age:14},
      {id:4,name:"agha",age:15},
      {id:4,name:"kamar",age:18}
    ]
    daynumber:string="5";
    }
   