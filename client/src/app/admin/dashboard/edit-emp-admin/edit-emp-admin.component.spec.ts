import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpAdminComponent } from './edit-emp-admin.component';

describe('EditEmpAdminComponent', () => {
  let component: EditEmpAdminComponent;
  let fixture: ComponentFixture<EditEmpAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmpAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
