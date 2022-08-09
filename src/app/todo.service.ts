import { Injectable , OnInit} from '@angular/core';
@Injectable({

  providedIn: 'root'
})
export class TodoService {
  url = "http://localhost:3000/todos/"
  todos = []
  selectedTodo: any;

  async getTodo(){
    const response = await fetch(this.url)
    const data = await response.json()
    this.todos = data
  }
  
}

