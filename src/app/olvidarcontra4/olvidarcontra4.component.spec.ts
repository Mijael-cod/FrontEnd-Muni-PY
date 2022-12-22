import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Olvidarcontra4Component } from './olvidarcontra4.component';

describe('Olvidarcontra4Component', () => {
  let component: Olvidarcontra4Component;
  let fixture: ComponentFixture<Olvidarcontra4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Olvidarcontra4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Olvidarcontra4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
