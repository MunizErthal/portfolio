import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deucritico } from './deucritico';

describe('Deucritico', () => {
  let component: Deucritico;
  let fixture: ComponentFixture<Deucritico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deucritico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deucritico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
