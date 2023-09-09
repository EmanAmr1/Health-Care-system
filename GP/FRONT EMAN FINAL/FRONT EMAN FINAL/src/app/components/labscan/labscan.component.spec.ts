import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabscanComponent } from './labscan.component';

describe('LabscanComponent', () => {
  let component: LabscanComponent;
  let fixture: ComponentFixture<LabscanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabscanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
