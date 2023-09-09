import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilelabtechComponent } from './profilelabtech.component';

describe('ProfilelabtechComponent', () => {
  let component: ProfilelabtechComponent;
  let fixture: ComponentFixture<ProfilelabtechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilelabtechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilelabtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
