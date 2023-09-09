import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpreComponent } from './addpre.component';

describe('AddpreComponent', () => {
  let component: AddpreComponent;
  let fixture: ComponentFixture<AddpreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
