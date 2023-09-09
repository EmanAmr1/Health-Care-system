import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasichomeComponent } from './basichome.component';

describe('BasichomeComponent', () => {
  let component: BasichomeComponent;
  let fixture: ComponentFixture<BasichomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasichomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasichomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
