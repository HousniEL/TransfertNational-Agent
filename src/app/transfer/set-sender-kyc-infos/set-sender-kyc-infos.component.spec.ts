import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSenderKycInfosComponent } from './set-sender-kyc-infos.component';

describe('SetSenderKycInfosComponent', () => {
  let component: SetSenderKycInfosComponent;
  let fixture: ComponentFixture<SetSenderKycInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetSenderKycInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSenderKycInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
