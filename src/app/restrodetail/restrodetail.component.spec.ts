import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrodetailComponent } from './restrodetail.component';

describe('RestrodetailComponent', () => {
  let component: RestrodetailComponent;
  let fixture: ComponentFixture<RestrodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrodetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
