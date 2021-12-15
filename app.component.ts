import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do';

  task: any = "";
  updatedTask: any = "";
  user_name: any = "";
  clicked: boolean = false;
  
  onSubmit(): void {
    this.task = (<HTMLInputElement>document.getElementById('taskName')).value;
    console.log(this.task);
    this.user_name = (<HTMLInputElement>document.getElementById('userName')).value;
    console.log(this.user_name);
    this.clicked = true;
    
  }

  onClear(): void {
    (<HTMLInputElement>document.getElementById('taskName')).value = "";
    (<HTMLInputElement>document.getElementById('userName')).value = "";
  }

  onDelete(): void {
    this.task = "";
  }

  onUpdate(): void {
    this.updatedTask = (<HTMLInputElement>document.getElementById('updatedTaskName')).value;
    this.task = this.updatedTask;
  }
}


