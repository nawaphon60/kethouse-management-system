import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { WarehouseService } from 'src/app/services/warehouse.service'

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {
  @Input() model: any
  @Input() state: string
  textValue: string | null = null;
  save_model: any | null = null
  status: number = 1

  constructor(
    private nzModalRef: NzModalRef,
    private warehouseService: WarehouseService
  ) { }

  ngOnInit(): void {
    this.save_model = {
      ...this.model
    }
    console.log(this.model);
    
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
