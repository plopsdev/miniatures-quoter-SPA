import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataScreenComponent } from './user-data-screen.component';

describe('UserDataScreenComponent', () => {
  let component: UserDataScreenComponent;
  let fixture: ComponentFixture<UserDataScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDataScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
