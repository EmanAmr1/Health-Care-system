import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrdownloadscansComponent } from './drdownloadscans.component';

describe('DrdownloadscansComponent', () => {
  let component: DrdownloadscansComponent;
  let fixture: ComponentFixture<DrdownloadscansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrdownloadscansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrdownloadscansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
