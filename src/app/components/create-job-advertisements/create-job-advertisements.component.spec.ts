import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobAdvertisementsComponent } from './create-job-advertisements.component';

describe('CreateJobAdvertisementsComponent', () => {
  let component: CreateJobAdvertisementsComponent;
  let fixture: ComponentFixture<CreateJobAdvertisementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJobAdvertisementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJobAdvertisementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
