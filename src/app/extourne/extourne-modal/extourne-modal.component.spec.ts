import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtourneModalComponent } from './extourne-modal.component';

describe('ExtourneModalComponent', () => {
  let component: ExtourneModalComponent;
  let fixture: ComponentFixture<ExtourneModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtourneModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtourneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
