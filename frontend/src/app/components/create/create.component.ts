import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  task: Todo = {
    title: '',
    description: '',
    dateToFinish: new Date(Date.now()),
    finish: false,
  }

  public taskForm: FormGroup;
  formResult: string;

  constructor(private fb: FormBuilder, private service: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dateToFinish: ['', [Validators.required]],
      finish: false
    })
  }

  addTask(): void {
    if(this.taskForm.valid){
      this.taskForm.value.dateToFinish = formatDate(this.taskForm.value.dateToFinish, 'dd/MM/yyyy', 'en');
      this.service.create(this.taskForm.value).subscribe((r) => {
        this.service.message('Task criada com sucesso!');
        this.router.navigate(['/']);
      }, err => {
        this.service.message('Falha ao criar Task');
      })
    }else{
      console.log('Form invalid');
    }
  }

  back(): void {
    this.router.navigate(['/']);
  }

}
