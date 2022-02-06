import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDebitComponent } from './main-debit.component';

describe('MainDebitComponent', () => {
  let component: MainDebitComponent;
  let fixture: ComponentFixture<MainDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
