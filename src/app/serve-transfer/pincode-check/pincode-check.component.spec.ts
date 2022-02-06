import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PincodeCheckComponent } from './pincode-check.component';

describe('PincodeCheckComponent', () => {
  let component: PincodeCheckComponent;
  let fixture: ComponentFixture<PincodeCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PincodeCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PincodeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
