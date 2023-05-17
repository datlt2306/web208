import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAdminComponent } from './layout-admin.component';

describe('LayoutAdminComponent', () => {
  let component: LayoutAdminComponent;
  let fixture: ComponentFixture<LayoutAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
