import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSquareCommentComponent } from './score-square-comment.component';

describe('ScoreSquareCommentComponent', () => {
  let component: ScoreSquareCommentComponent;
  let fixture: ComponentFixture<ScoreSquareCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreSquareCommentComponent]
    });
    fixture = TestBed.createComponent(ScoreSquareCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
