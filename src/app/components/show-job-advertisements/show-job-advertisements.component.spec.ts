import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJobAdvertisementsComponent } from './show-job-advertisements.component';

describe('ShowJobAdvertisementsComponent', () => {
  let component: ShowJobAdvertisementsComponent;
  let fixture: ComponentFixture<ShowJobAdvertisementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowJobAdvertisementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowJobAdvertisementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
