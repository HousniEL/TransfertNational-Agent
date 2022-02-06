import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferInfosComponent } from './transfer-infos.component';

describe('TransferInfosComponent', () => {
  let component: TransferInfosComponent;
  let fixture: ComponentFixture<TransferInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
