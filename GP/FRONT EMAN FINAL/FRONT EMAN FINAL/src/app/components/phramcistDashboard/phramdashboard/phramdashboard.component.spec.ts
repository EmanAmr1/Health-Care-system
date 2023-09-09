import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhramdashboardComponent } from './phramdashboard.component';

describe('PhramdashboardComponent', () => {
  let component: PhramdashboardComponent;
  let fixture: ComponentFixture<PhramdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhramdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhramdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
