import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrmsidebarComponent } from './phrmsidebar.component';

describe('PhrmsidebarComponent', () => {
  let component: PhrmsidebarComponent;
  let fixture: ComponentFixture<PhrmsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhrmsidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhrmsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
