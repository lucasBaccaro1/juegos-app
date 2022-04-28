import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegos3Component } from './juegos3.component';

describe('Juegos3Component', () => {
  let component: Juegos3Component;
  let fixture: ComponentFixture<Juegos3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegos3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Juegos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
