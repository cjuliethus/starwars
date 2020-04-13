import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFilterCriteriaComponent } from './movie-filter-criteria.component';

describe('MovieFilterCriteriaComponent', () => {
  let component: MovieFilterCriteriaComponent;
  let fixture: ComponentFixture<MovieFilterCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieFilterCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFilterCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
