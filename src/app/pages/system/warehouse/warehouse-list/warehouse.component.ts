import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { EditWarehouseComponent } from 'src/app/components/edit-warehouse/edit-warehouse.component'
import { WarehouseService } from 'src/app/services/warehouse.service'
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  warehouselist: any[] = []
  count: any = null
  // editmodal: NzModalRef<EditWarehouseComponent, any> = null
  model_search = {
    search: "",
    warehouse_id: "",
    warehouse_name: "",
    numbers_ofproducts: ""
  }

  constructor(
    private ModalService: NzModalService,
    private warehouseService: WarehouseService
  ) { }

  ngOnInit(): void {
    this.getAll()
    // this.createWarehouse('narmol')
  }

  async getAll() {
    let res: any = null
    try {
      res = await this.warehouseService.getAll({})
      console.log(res);

      this.warehouselist = res
      // this.count = res.count;
    } catch (err) {

    }
  }

  search() {
    this.warehouseService.getAll(this.model_search).then((res: any) => {
      this.warehouselist = res
      console.log(res);
      
    }).catch((err: any) => {

    })
  }

  createWarehouse(str: string): void {
    const modalRef = this.ModalService.create({
      nzTitle: 'เพิ่มคลังสินค้า',
      nzWidth: '40%',
      nzContent: EditWarehouseComponent,
      nzComponentParams: {
        model: {
          id: null,
          warehouse_name: ""
        },
        state: "create"
      },
      nzClosable: false,
      nzFooter: null
    }).afterClose.subscribe((r: boolean) => {
      modalRef.unsubscribe()
      if (r) {
        this.getAll()
      }
    })
  }

  editWarehouse(obj: any): void {
    const modalRef = this.ModalService.create({
      nzTitle: 'แก้ไขคลังสินค้า',
      nzWidth: '40%',
      nzContent: EditWarehouseComponent,
      nzComponentParams: {
        model: obj,
        state: "edit"
      },
      nzClosable: false,
      nzFooter: null
    }).afterClose.subscribe((r: boolean) => {
      modalRef.unsubscribe()
      if (r) {
        this.getAll()
      }
    })
  }

  deleteWarehouse(id: any) {
    this.ModalService.confirm({
      nzTitle: 'ยืนยันการลบคลังสินค้า',
      nzContent: 'ต้องการลบคลังสินค้าใช่หรือไม่ ?',
      nzOkText: 'ยืนยัน',
      nzCancelText: 'ยกเลิก',
      nzStyle: {
        top: '40%'
      },
      nzOnOk: () => {
        this.warehouseService.delete(id).then((res: any) => {
          this.getAll()
        })
      }
    })
  }

  // handleOk(): void {
  //   let model = this.editmodal.componentInstance.update()
  //   console.log(model)

  //   this.warehouseService.update(model, model.warehouse_id).then((res: any) => {
  //     // this.handleCancel()
  //     this.ModalService.closeAll()
  //     this.getAll()
  //   }).catch((err: any) => {

  //   })
  // }

  // handleCancel(): void {
  //   this.ModalService.closeAll()
  //   // this.NzModalRef.destroy()
  // }

}
