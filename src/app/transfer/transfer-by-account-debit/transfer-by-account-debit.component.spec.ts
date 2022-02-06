import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferByAccountDebitComponent } from './transfer-by-account-debit.component';

describe('TransferByAccountDebitComponent', () => {
  let component: TransferByAccountDebitComponent;
  let fixture: ComponentFixture<TransferByAccountDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferByAccountDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferByAccountDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
