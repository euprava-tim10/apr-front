import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComapanyComponent } from './my-comapany.component';

describe('MyComapanyComponent', () => {
  let component: MyComapanyComponent;
  let fixture: ComponentFixture<MyComapanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComapanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComapanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
