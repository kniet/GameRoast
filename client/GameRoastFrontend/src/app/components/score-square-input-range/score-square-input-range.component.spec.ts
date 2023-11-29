import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSquareInputRangeComponent } from './score-square-input-range.component';

describe('ScoreSquareInputRangeComponent', () => {
  let component: ScoreSquareInputRangeComponent;
  let fixture: ComponentFixture<ScoreSquareInputRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreSquareInputRangeComponent]
    });
    fixture = TestBed.createComponent(ScoreSquareInputRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
