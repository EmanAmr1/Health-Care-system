import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobyadminComponent } from './infobyadmin.component';

describe('InfobyadminComponent', () => {
  let component: InfobyadminComponent;
  let fixture: ComponentFixture<InfobyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfobyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfobyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
