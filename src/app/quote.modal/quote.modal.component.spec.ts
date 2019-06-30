import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quote.ModalComponent } from './quote.modal.component';

describe('Quote.ModalComponent', () => {
  let component: Quote.ModalComponent;
  let fixture: ComponentFixture<Quote.ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quote.ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quote.ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
