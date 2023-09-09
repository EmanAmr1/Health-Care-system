import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilephramcistComponent } from './profilephramcist.component';

describe('ProfilephramcistComponent', () => {
  let component: ProfilephramcistComponent;
  let fixture: ComponentFixture<ProfilephramcistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilephramcistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilephramcistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
