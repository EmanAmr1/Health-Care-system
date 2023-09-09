import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabhomeComponent } from './labhome.component';

describe('LabhomeComponent', () => {
  let component: LabhomeComponent;
  let fixture: ComponentFixture<LabhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
