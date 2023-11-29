import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreGamePageComponent } from './score-game-page.component';

describe('ScoreGamePageComponent', () => {
  let component: ScoreGamePageComponent;
  let fixture: ComponentFixture<ScoreGamePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreGamePageComponent]
    });
    fixture = TestBed.createComponent(ScoreGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
