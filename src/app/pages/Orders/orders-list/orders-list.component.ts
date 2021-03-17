import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  date = null;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
