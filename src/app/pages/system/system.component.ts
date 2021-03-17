import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  isCollapsed = false;
  public href: string = "";
  openMap: { [name: string]: boolean } = {
    sub1: false,
    sub2: false,
    sub3: false,
    sub4: false,
    sub5: false
  };
  isLoading = false

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.href);

    if (this.href == '/system/warehouse') {
      this.openMap.sub1 = true
    }
    
    if (this.href == `/system/warehouse-detail/1`) {
      this.openMap.sub1 = true
      console.log(this.openMap.sub1);
    }

    if (this.href == '/system/products') {
      this.openMap.sub3 = true
    }
    
    if (this.href == '/system/create-product') {
      this.openMap.sub3 = true
    }
    
    if (this.href == '/system/transfer') {
      this.openMap.sub3 = true
    }

    if (this.href == '/system/orders-list') {
      this.openMap.sub4 = true
      console.log(this.openMap.sub4);
    }
  }

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

}
