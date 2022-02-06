import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeTransferByWalletComponent } from './serve-transfer-by-wallet.component';

describe('ServeTransferByWalletComponent', () => {
  let component: ServeTransferByWalletComponent;
  let fixture: ComponentFixture<ServeTransferByWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeTransferByWalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeTransferByWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
