import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskAQuoteComponent } from './ask-a-quote.component';

describe('AskAQuoteComponent', () => {
  let component: AskAQuoteComponent;
  let fixture: ComponentFixture<AskAQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskAQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskAQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
