import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSquareComponent } from './score-square.component';

describe('ScoreSquareComponent', () => {
  let component: ScoreSquareComponent;
  let fixture: ComponentFixture<ScoreSquareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreSquareComponent]
    });
    fixture = TestBed.createComponent(ScoreSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
