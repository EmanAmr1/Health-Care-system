import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlllostrequestsComponent } from './alllostrequests.component';

describe('AlllostrequestsComponent', () => {
  let component: AlllostrequestsComponent;
  let fixture: ComponentFixture<AlllostrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlllostrequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlllostrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
