import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfosViewComponent } from './user-infos-view.component';

describe('UserInfosViewComponent', () => {
  let component: UserInfosViewComponent;
  let fixture: ComponentFixture<UserInfosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfosViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
