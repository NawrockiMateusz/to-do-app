import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  taskName!: string;

  taskArray = [
    { name: 'zrobić pranie', isDone: false },
    { name: 'zatankować samochód', isDone: true },
  ];

  addNewTask(taskName: string) {
    this.taskArray.push({ name: taskName, isDone: false });
    this.taskName = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
