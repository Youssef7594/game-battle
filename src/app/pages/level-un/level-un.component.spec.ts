import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelUnComponent } from './level-un.component';

describe('LevelUnComponent', () => {
  let component: LevelUnComponent;
  let fixture: ComponentFixture<LevelUnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelUnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
