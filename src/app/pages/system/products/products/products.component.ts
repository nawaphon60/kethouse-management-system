import { Component, OnInit, ViewChild } from '@angular/core';
import getISOWeek from 'date-fns/getISOWeek';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  checked = false

  constructor() { }

  ngOnInit(): void {
  }

  
}
