import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsidebarComponent } from './labsidebar.component';

describe('LabsidebarComponent', () => {
  let component: LabsidebarComponent;
  let fixture: ComponentFixture<LabsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabsidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
