import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Olvidarcontra3Component } from './olvidarcontra3.component';

describe('Olvidarcontra3Component', () => {
  let component: Olvidarcontra3Component;
  let fixture: ComponentFixture<Olvidarcontra3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Olvidarcontra3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Olvidarcontra3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
