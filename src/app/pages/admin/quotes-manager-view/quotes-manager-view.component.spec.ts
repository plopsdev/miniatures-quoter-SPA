import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesManagerViewComponent } from './quotes-manager-view.component';

describe('QuotesManagerViewComponent', () => {
  let component: QuotesManagerViewComponent;
  let fixture: ComponentFixture<QuotesManagerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesManagerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesManagerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
