import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/Todo';
import { TodoserviceService } from '../../services/todoservice.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];


  constructor(private todoService: TodoserviceService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

}

