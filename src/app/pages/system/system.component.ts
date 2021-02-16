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
    sub3: false
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.href);

    if (this.href == '/system/warehouse') {
      this.openMap.sub1 = true
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
