import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  taskArray = [
    { name: 'zrobić pranie', isDone: false },
    { name: 'zatankować samochód', isDone: true },
  ];

  constructor() {}

  ngOnInit(): void {}
}
