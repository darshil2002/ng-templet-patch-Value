import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormGroup,FormGroupName,FormControl} from '@angular/forms'
import Chart, { registerables } from 'chart.js/auto';

Chart.register(...registerables)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('myChart') myChart!: ElementRef;
  x:boolean=true;

  
  y=[
    {name:'darshil',age:10},
    {name:'darsh', age: 26}
  ]

  myForm=new FormGroup({
    user: new FormControl(''),
    age : new FormControl(''),
  })
  
  ngOnInit(): void {
  }

  sub(){
    var us=this.myForm.get('user')?.value;
    var ag=this.myForm.get('age')?.value;
    console.log('my name is '+ us +'and age is '+ ag);
  }
  reserFunc(){
    this.myForm.reset()
  }
  fillValue(){
    this.myForm.patchValue({
      "user":'darsh',
      "age": '12',
    })
  }
  
  title = 'ngTempOne';
}
