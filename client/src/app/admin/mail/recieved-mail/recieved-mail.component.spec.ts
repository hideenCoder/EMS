import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedMailComponent } from './recieved-mail.component';

describe('RecievedMailComponent', () => {
  let component: RecievedMailComponent;
  let fixture: ComponentFixture<RecievedMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievedMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievedMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
