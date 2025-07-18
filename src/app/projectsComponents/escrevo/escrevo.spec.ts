import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Escrevo } from './escrevo';

describe('Escrevo', () => {
  let component: Escrevo;
  let fixture: ComponentFixture<Escrevo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Escrevo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Escrevo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
