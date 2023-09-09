import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadtestsComponent } from './uploadtests.component';

describe('UploadtestsComponent', () => {
  let component: UploadtestsComponent;
  let fixture: ComponentFixture<UploadtestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadtestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadtestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
