import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegos2Component } from './juegos2.component';

describe('Juegos2Component', () => {
  let component: Juegos2Component;
  let fixture: ComponentFixture<Juegos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juegos2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Juegos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
