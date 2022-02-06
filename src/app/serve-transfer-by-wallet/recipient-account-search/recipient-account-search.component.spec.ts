import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientAccountSearchComponent } from './recipient-account-search.component';

describe('RecipientAccountSearchComponent', () => {
  let component: RecipientAccountSearchComponent;
  let fixture: ComponentFixture<RecipientAccountSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientAccountSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientAccountSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
