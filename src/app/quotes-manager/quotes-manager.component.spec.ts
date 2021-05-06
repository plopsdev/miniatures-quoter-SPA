import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesManagerComponent } from './quotes-manager.component';

describe('QuotesManagerComponent', () => {
  let component: QuotesManagerComponent;
  let fixture: ComponentFixture<QuotesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
