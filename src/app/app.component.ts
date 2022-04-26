import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  name = 'Angular 4';

  todos: Todo[] = [
    new Todo('surendra','bankar'),
    new Todo('Om','vanjari')
  ];
}
