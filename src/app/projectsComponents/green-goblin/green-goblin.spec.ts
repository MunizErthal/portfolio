import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenGoblin } from './green-goblin';

describe('GreenGoblin', () => {
  let component: GreenGoblin;
  let fixture: ComponentFixture<GreenGoblin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenGoblin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenGoblin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
