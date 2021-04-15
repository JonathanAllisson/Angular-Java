import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';


interface Task {
  title: string;
  description: string;
  date: Date;
  finish: Boolean;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  task: Task = {
    title: '',
    description: '',
    date: new Date(Date.now()),
    finish: false,
  }

  public taskForm: FormGroup;
  formResult: string;

  constructor(private fb: FormBuilder, private service: TodoService) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: [formatDate(this.task.date, 'MM/dd/yyyy', 'en'), [Validators.required]],
      finish: false
    })
  }

  addTask(): void {
    if(this.taskForm.valid){
      //this.formResult = JSON.stringify(this.taskForm.value);
      console.log(this.taskForm.value);
      this.service.create(this.taskForm.value).subscribe((r) => {
        this.service.message('Task criada com sucesso!');
      }, err => {
        this.service.message('Falha ao criar Task');
      })
    }else{
      console.log('Form invalid');
    }
  }

}
