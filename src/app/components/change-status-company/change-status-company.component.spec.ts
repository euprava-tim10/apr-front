import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChangeStatusCompanyComponent} from './change-status-company.component';

describe('ChangeStatusCompanyComponent', () => {
  let component: ChangeStatusCompanyComponent;
  let fixture: ComponentFixture<ChangeStatusCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeStatusCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStatusCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
