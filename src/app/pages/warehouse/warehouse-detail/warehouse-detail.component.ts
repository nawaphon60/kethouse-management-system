import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { SET_PROFILE } from 'src/app/actions';
import { WarehouseService } from 'src/app/services/warehouse.service'
import { NzModalService } from 'ng-zorro-antd/modal';
import { ChangeComponent } from 'src/app/components/change/change.component'
import { DeleteProductComponent } from 'src/app/components/delete-product/delete-product.component'

@Component({
  selector: 'app-warehouse-detail',
  templateUrl: './warehouse-detail.component.html',
  styleUrls: ['./warehouse-detail.component.css']
})
export class WarehouseDetailComponent implements OnInit, OnDestroy {
  warehouse: any = {
    warehouse_name: '',
    updated_at: ''
  }
  subscribt = null
  checked = false

  constructor(
    private activateroute: ActivatedRoute,
    private store: Store<any>,
    private warehouseService: WarehouseService,
    private ModalService: NzModalService
  ) { }

  ngOnDestroy() {
    if (this.subscribt) {
      this.subscribt.unsubscribe()
    }
    
  }

  ngOnInit(): void {
    var id = this.activateroute.snapshot.paramMap.get('id')
    console.log(id)
    this.store.dispatch(new SET_PROFILE({ id: this.activateroute.snapshot.paramMap.get('id') }))

    this.subscribt = this.store.pipe(select('account')).subscribe((res: any) => {
      console.log(res)

    })
    this.getByID(id)
    // this.deleteProduct('narmol')
  }

  async getByID(id: any) {
    let res: any
    try {
      res = await this.warehouseService.getByID(id)
      this.warehouse = res
      console.log(this.warehouse)

    } catch (err) {

    }
  }

  Change(obj: any): void {
    console.log(obj);

    const modalRef = this.ModalService.create({
      nzTitle: 'ปรับจำนวนคงเหลือในคลังสินค้า',
      nzWidth: '40%',
      nzContent: ChangeComponent,
      nzComponentParams: {
        model: obj,
        state: "edit"
      },
      nzClosable: false,
      nzFooter: null
    }).afterClose.subscribe((r: boolean) => {
      modalRef.unsubscribe()
      if (r) {
        // this.getByID()
      }
    })
  }

  deleteProduct(str: string) {
    const modalRef = this.ModalService.create({
      // nzTitle: 'ปรับจำนวนคงเหลือในคลังสินค้า',
      nzWidth: '40%',
      nzContent: DeleteProductComponent,
      nzComponentParams: {
        // model: obj,
        // state: "edit"
      },
      nzClosable: false,
      nzFooter: null
    }).afterClose.subscribe((r: boolean) => {
      modalRef.unsubscribe()
      if (r) {
        // this.getByID()
      }
    })
  }
}
