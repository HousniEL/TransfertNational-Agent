import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpCheckComponent } from './otp-check.component';

describe('OtpCheckComponent', () => {
  let component: OtpCheckComponent;
  let fixture: ComponentFixture<OtpCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
