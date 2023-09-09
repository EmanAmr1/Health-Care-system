import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrmhomeComponent } from './phrmhome.component';

describe('PhrmhomeComponent', () => {
  let component: PhrmhomeComponent;
  let fixture: ComponentFixture<PhrmhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhrmhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhrmhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
