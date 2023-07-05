import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RequestsChangeStatusComponent} from './requests-change-status.component';

describe('RequestsChangeStatusComponent', () => {
  let component: RequestsChangeStatusComponent;
  let fixture: ComponentFixture<RequestsChangeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsChangeStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsChangeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
