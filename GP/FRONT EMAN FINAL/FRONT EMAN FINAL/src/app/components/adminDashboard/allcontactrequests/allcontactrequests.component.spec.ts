import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcontactrequestsComponent } from './allcontactrequests.component';

describe('AllcontactrequestsComponent', () => {
  let component: AllcontactrequestsComponent;
  let fixture: ComponentFixture<AllcontactrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcontactrequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcontactrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
