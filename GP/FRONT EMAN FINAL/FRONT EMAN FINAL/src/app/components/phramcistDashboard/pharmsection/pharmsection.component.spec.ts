import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmsectionComponent } from './pharmsection.component';

describe('PharmsectionComponent', () => {
  let component: PharmsectionComponent;
  let fixture: ComponentFixture<PharmsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
