import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuplabtechComponent } from './signuplabtech.component';

describe('SignuplabtechComponent', () => {
  let component: SignuplabtechComponent;
  let fixture: ComponentFixture<SignuplabtechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignuplabtechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignuplabtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
