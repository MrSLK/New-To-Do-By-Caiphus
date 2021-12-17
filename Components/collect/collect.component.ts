import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.css']
})
export class CollectComponent implements OnInit {
  myFormValues:any;
  myForm!: FormGroup;
  title = 'To-Do';
  task: string = "";
  test!:boolean;
  updatedTask: any = "";
  user_name: any = "";
  clicked: boolean = false;
  date: Date = new Date();
  isValid!: boolean;

  constructor() { 
  }


  ngOnInit(): void { 

    this.myForm = new FormGroup({
      task_name: new FormControl(''),
      user_name: new FormControl('')
    });
  }


  taskLength(): boolean  {
    if(this.task == "" && this.user_name == ""){
        this.test = false;
    }else {
      this.test = true;
    }
    return this.test;
  }
  
  onSubmit() {
  console.log(this.myForm.value);
  

  }

  onClear(): void {
    this.myForm.value.task_name = "";
    this.myForm.value.user_name = "";
    
  }

  onDelete(): void {
    this.task = "";
    this.user_name = "";
  }

  onUpdate(): void {
    this.updatedTask = (<HTMLInputElement>document.getElementById('updatedTaskName')).value;
    this.task = this.updatedTask;
  }
}
