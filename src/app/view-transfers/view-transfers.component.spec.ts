import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransfersComponent } from './view-transfers.component';

describe('ViewTransfersComponent', () => {
  let component: ViewTransfersComponent;
  let fixture: ComponentFixture<ViewTransfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTransfersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
