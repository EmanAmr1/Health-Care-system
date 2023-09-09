import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrmscanComponent } from './phrmscan.component';

describe('PhrmscanComponent', () => {
  let component: PhrmscanComponent;
  let fixture: ComponentFixture<PhrmscanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhrmscanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhrmscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
