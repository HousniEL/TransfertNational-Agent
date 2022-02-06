import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByCinComponent } from './search-by-cin.component';

describe('SearchByCinComponent', () => {
  let component: SearchByCinComponent;
  let fixture: ComponentFixture<SearchByCinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByCinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByCinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
