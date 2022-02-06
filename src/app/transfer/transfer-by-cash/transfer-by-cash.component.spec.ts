import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferByCashComponent } from './transfer-by-cash.component';

describe('TransferByCashComponent', () => {
  let component: TransferByCashComponent;
  let fixture: ComponentFixture<TransferByCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferByCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferByCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
