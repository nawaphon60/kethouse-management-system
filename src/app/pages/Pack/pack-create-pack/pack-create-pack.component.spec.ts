import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackCreatePackComponent } from './pack-create-pack.component';

describe('PackCreatePackComponent', () => {
  let component: PackCreatePackComponent;
  let fixture: ComponentFixture<PackCreatePackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackCreatePackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackCreatePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
