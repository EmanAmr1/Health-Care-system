import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanadminComponent } from './scanadmin.component';

describe('ScanadminComponent', () => {
  let component: ScanadminComponent;
  let fixture: ComponentFixture<ScanadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
