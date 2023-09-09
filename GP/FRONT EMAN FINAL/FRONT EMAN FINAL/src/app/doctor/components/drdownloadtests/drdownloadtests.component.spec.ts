import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrdownloadtestsComponent } from './drdownloadtests.component';

describe('DrdownloadtestsComponent', () => {
  let component: DrdownloadtestsComponent;
  let fixture: ComponentFixture<DrdownloadtestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrdownloadtestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrdownloadtestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
