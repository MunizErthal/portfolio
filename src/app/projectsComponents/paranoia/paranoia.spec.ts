import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paranoia } from './paranoia';

describe('Paranoia', () => {
  let component: Paranoia;
  let fixture: ComponentFixture<Paranoia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paranoia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paranoia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
