import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styleUrls: ['./edit-warehouse.component.css']
})
export class EditWarehouseComponent implements OnInit {
  warehouse_id: string | null = null;
  warehouse_name: string | null = null;
  textValue: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
