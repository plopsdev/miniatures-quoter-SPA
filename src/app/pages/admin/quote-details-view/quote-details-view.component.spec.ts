import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDetailsViewComponent } from './quote-details-view.component';

describe('QuoteDetailsViewComponent', () => {
  let component: QuoteDetailsViewComponent;
  let fixture: ComponentFixture<QuoteDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
