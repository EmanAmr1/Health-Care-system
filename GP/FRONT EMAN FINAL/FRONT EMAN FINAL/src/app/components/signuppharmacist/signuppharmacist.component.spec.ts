import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuppharmacistComponent } from './signuppharmacist.component';

describe('SignuppharmacistComponent', () => {
  let component: SignuppharmacistComponent;
  let fixture: ComponentFixture<SignuppharmacistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignuppharmacistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignuppharmacistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
