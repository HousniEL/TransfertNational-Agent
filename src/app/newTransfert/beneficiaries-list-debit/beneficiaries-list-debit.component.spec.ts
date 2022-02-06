import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariesListDebitComponent } from './beneficiaries-list-debit.component';

describe('BeneficiariesListDebitComponent', () => {
  let component: BeneficiariesListDebitComponent;
  let fixture: ComponentFixture<BeneficiariesListDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiariesListDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiariesListDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
