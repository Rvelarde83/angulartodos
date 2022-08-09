import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

todoService: TodoService;
  constructor(todoService: TodoService) { 

    console.log(todoService)
    this.todoService = todoService;
}

  ngOnInit(): void {
    this.todoService.getTodo();
  }

}
