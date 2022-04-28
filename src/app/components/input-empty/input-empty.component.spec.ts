import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEmptyComponent } from './input-empty.component';

describe('InputEmptyComponent', () => {
  let component: InputEmptyComponent;
  let fixture: ComponentFixture<InputEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
