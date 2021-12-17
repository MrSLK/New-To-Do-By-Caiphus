import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.css']
})
export class CollectComponent implements OnInit {


  constructor() { 
  }

  title = 'To-Do';
  task: string = "";
  test!:boolean;
  updatedTask: any = "";
  user_name: any = "";
  clicked: boolean = false;
  date: Date = new Date();
  isValid!: boolean; 

  taskLength(): boolean  {
    if(this.task == "" && this.user_name == ""){
        this.test = false;
    }else {
      this.test = true;
    }
    return this.test;
  }

  ngOnInit(): void { 
  }

  
  onSubmit(): void {
    this.task = (<HTMLInputElement>document.getElementById('taskName')).value;
    console.log(this.task);
    this.user_name = (<HTMLInputElement>document.getElementById('userName')).value;
    console.log(this.user_name);
    this.clicked = true;
    this.taskLength();
  }

  onClear(): void {
    (<HTMLInputElement>document.getElementById('taskName')).value = "";
    (<HTMLInputElement>document.getElementById('userName')).value = "";
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
