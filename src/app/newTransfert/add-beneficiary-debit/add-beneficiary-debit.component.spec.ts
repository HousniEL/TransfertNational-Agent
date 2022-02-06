import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeneficiaryDebitComponent } from './add-beneficiary-debit.component';

describe('AddBeneficiaryDebitComponent', () => {
  let component: AddBeneficiaryDebitComponent;
  let fixture: ComponentFixture<AddBeneficiaryDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBeneficiaryDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeneficiaryDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
