import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientSearchComponent } from './recipient-search.component';

describe('RecipientSearchComponent', () => {
  let component: RecipientSearchComponent;
  let fixture: ComponentFixture<RecipientSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
