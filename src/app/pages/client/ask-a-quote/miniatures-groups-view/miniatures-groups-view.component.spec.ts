import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniaturesGroupsViewComponent } from './miniatures-groups-view.component';

describe('MiniaturesGroupsViewComponent', () => {
  let component: MiniaturesGroupsViewComponent;
  let fixture: ComponentFixture<MiniaturesGroupsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniaturesGroupsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniaturesGroupsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
