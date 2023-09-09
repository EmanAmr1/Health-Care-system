import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAndScanRequiredComponent } from './test-and-scan-required.component';

describe('TestAndScanRequiredComponent', () => {
  let component: TestAndScanRequiredComponent;
  let fixture: ComponentFixture<TestAndScanRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAndScanRequiredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestAndScanRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
