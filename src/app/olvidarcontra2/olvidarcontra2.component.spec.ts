import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Olvidarcontra2Component } from './olvidarcontra2.component';

describe('Olvidarcontra2Component', () => {
  let component: Olvidarcontra2Component;
  let fixture: ComponentFixture<Olvidarcontra2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Olvidarcontra2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Olvidarcontra2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
