import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { WarehouseService } from 'src/app/services/warehouse.service'

@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styleUrls: ['./edit-warehouse.component.css']
})
export class EditWarehouseComponent implements OnInit {
  @Input() model: any
  @Input() state: string
  // warehouse_id: string | null = null;
  // warehouse_name: string | null = null;
  textValue: string | null = null;
  save_model: any | null = null
  
  constructor(
    private nzModalRef: NzModalRef,
    private warehouseService: WarehouseService
  ) { }

  ngOnInit(): void {
    this.save_model = {
      ...this.model
    }
  }

  create() {
    let model = {
      warehouse_id: this.save_model.warehouse_id,
      warehouse_name: this.save_model.warehouse_name
    }
    
    if (this.state == "create") {
      this.warehouseService.create(model).then((res: any) => {
        console.log(res);
        this.nzModalRef.close(true)
      }).catch((err: any) => {
  
      })
    }
  }

  update() {
    let model = {
      warehouse_id: this.save_model.warehouse_id,
      warehouse_name: this.save_model.warehouse_name
    }
    
    if (this.state == "edit") {
      this.warehouseService.update(model, model.warehouse_id).then((res: any) => {
        console.log(res);
        this.nzModalRef.close(true)
      }).catch((err: any) => {
  
      })
    }
  }

  closeModal() {
    this.nzModalRef.close()
  }
}
